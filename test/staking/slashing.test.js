const { expectEvent } = require('openzeppelin-test-helpers')

// contracts
const GraphToken = artifacts.require('./GraphToken.sol')
const Staking = artifacts.require('./Staking.sol')

// helpers
const GraphProtocol = require('../../graphProtocol.js')
const helpers = require('../lib/testHelpers')

contract(
  'Staking (Slashing)',
  ([
    deploymentAddress,
    daoContract,
    indexingStaker,
    fisherman,
    ...accounts
  ]) => {
    /**
     * testing constants
     */
    const minimumCurationStakingAmount =
        helpers.stakingConstants.minimumCurationStakingAmount,
      minimumIndexingStakingAmount =
        helpers.stakingConstants.minimumIndexingStakingAmount,
      defaultReserveRatio = helpers.stakingConstants.defaultReserveRatio,
      maximumIndexers = helpers.stakingConstants.maximumIndexers,
      slashingPercent = helpers.stakingConstants.slashingPercent,
      thawingPeriod = helpers.stakingConstants.thawingPeriod,
      initialTokenSupply = helpers.graphTokenConstants.initialTokenSupply,
      stakingAmount = helpers.graphTokenConstants.stakingAmount,
      shareAmountFor10000 = helpers.graphTokenConstants.shareAmountFor10000,
      tokensMintedForStaker = helpers.graphTokenConstants.tokensMintedForStaker,
      chainId = 1,
      domainTypeHash = web3.utils.sha3(
        'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract,bytes32 salt)',
      ),
      domainNameHash = web3.utils.sha3('Graph Protocol'),
      domainVersionHash = web3.utils.sha3('0.1'),
      attestationTypeHash = web3.utils.sha3(
        'Attestation(IpfsHash requestCID,IpfsHash responseCID,uint256 gasUsed,uint256 responseNumBytes)IpfsHash(bytes32 hash,uint16 hashFunction)',
      ),
      attestationByteSize = 197
    let deployedStaking,
      deployedGraphToken,
      subgraphIdHex0x = helpers.randomSubgraphIdHex0x(),
      subgraphIdHex = helpers.randomSubgraphIdHex(subgraphIdHex0x),
      subgraphIdBytes = web3.utils.hexToBytes(subgraphIdHex0x),
      gp

    before(async () => {
      // deploy GraphToken contract
      deployedGraphToken = await GraphToken.new(
        daoContract, // governor
        initialTokenSupply, // initial supply
        { from: deploymentAddress },
      )

      // send some tokens to the staking account
      const tokensForIndexer = await deployedGraphToken.mint(
        indexingStaker, // to
        tokensMintedForStaker, // value
        { from: daoContract },
      )
      assert(tokensForIndexer, 'Mints Graph Tokens for Indexer.')

      // deploy Staking contract
      deployedStaking = await Staking.new(
        daoContract, // <address> governor
        minimumCurationStakingAmount, // <uint256> minimumCurationStakingAmount
        defaultReserveRatio, // <uint256> defaultReserveRatio (ppm)
        minimumIndexingStakingAmount, // <uint256> minimumIndexingStakingAmount
        maximumIndexers, // <uint256> maximumIndexers
        slashingPercent, // <uint256> slashingPercent
        thawingPeriod, // <uint256> thawingPeriod
        deployedGraphToken.address, // <address> token
        { from: deploymentAddress },
      )
      assert(
        web3.utils.isAddress(deployedStaking.address),
        'Staking address is address.',
      )

      // init Graph Protocol JS library with deployed staking contract
      gp = GraphProtocol({
        Staking: deployedStaking,
        GraphToken: deployedGraphToken,
      })
    })

    describe('slashing', () => {
      // Need to get this to work in the future, but not for alpha - dk
      // it('...should allow a dispute to be created', async () => {
      //   const data = await createDisputeDataWithSignedAttestation()
      //   const createDispute = await deployedGraphToken.transferToTokenReceiver(
      //     deployedStaking.address, // to
      //     0, // value
      //     data, // data
      //     { from: fisherman }
      //   )
      //   console.log({ createDispute })
      // })
    })

    async function createDisputeDataWithSignedAttestation() {
      const attestationData = {
        subgraphId: subgraphIdHex0x,
        requestCID: {
          hash: web3.utils.randomHex(32),
          hashFunction: '0x1220',
        },
        responseCID: {
          hash: web3.utils.randomHex(32),
          hashFunction: '0x1220',
        },
        gasUsed: 123000, // Math.floor(Math.random() * 100000) + 100000,
        responseBytes: 4500, // Math.floor(Math.random() * 3000) + 1000
      }
      const domainSeparator = web3.utils.sha3(
        domainTypeHash +
          domainNameHash +
          domainVersionHash +
          chainId +
          deployedStaking.address +
          subgraphIdHex0x,
      )
      const encodedAttestation = web3.eth.abi.encodeParameters(
        [
          'bytes32',
          'bytes32',
          'uint16',
          'bytes32',
          'uint16',
          'uint256',
          'uint256',
        ],
        [
          attestationData.subgraphId,
          attestationData.requestCID.hash,
          attestationData.requestCID.hashFunction,
          attestationData.responseCID.hash,
          attestationData.responseCID.hashFunction,
          attestationData.gasUsed,
          attestationData.responseBytes,
        ],
      )
      const attestationHash = web3.utils.sha3(
        attestationTypeHash + encodedAttestation,
      )
      const signedAttestation = await web3.eth.sign(
        domainSeparator + attestationHash,
        fisherman,
      )
      // required bytes: 1 + 32 + 197 = 230
      const tokensReceivedHexData =
        '0x' +
        '02' + // TokenReceiptAction.dispute (1 byte)
        subgraphIdHex + // Subgraph ID without `0x` (32 bytes)
        encodedAttestation.substring(2) + // Hex encoded attestation w/o `0x` (< 197 bytes)
        signedAttestation.substring(2) // IEP712 domain separator signed attestation (< 197 bytes)
      const data = web3.utils.hexToBytes(tokensReceivedHexData)

      console.log({
        //   attestationData,
        //   domainSeparator,

        // encodedAttestation,
        encodedAttestationLength: encodedAttestation.length,
        encodedAttestationHexLength: encodedAttestation.substring(2).length,
        encodedAttestationByteLength: web3.utils.hexToBytes(encodedAttestation)
          .length,
        expectedEncodedAttestationByteLength: '< ' + attestationByteSize,

        // signedAttestation,
        signedAttestationLength: signedAttestation.length,
        signedAttestationHexLength: signedAttestation.substring(2).length,
        signedAttestationByteLength: web3.utils.hexToBytes(signedAttestation)
          .length,
        expectedSignedAttestationByteLength: '< ' + attestationByteSize,

        encodedAttestationPlusSignatureByteLength:
          web3.utils.hexToBytes(encodedAttestation).length +
          web3.utils.hexToBytes(signedAttestation).length,

        // subgraphIdHex0x,
        subgraphIdHex0xLength: subgraphIdHex0x.length,
        // subgraphIdHex,
        subgraphIdHexLength: subgraphIdHex.length,
        // subgraphIdBytes,
        subgraphIdByteLength: subgraphIdBytes.length,

        // tokensReceivedHexData,
        tokensReceivedHexDataLength: tokensReceivedHexData.length,
        tokensReceivedByteDataLength: data.length,
        expectedTokensReceivedByteDataLength: 33 + attestationByteSize,

        // dataSentToTokensReceived: String("[" + data.toString() + "]"),
        PASS: data.length === 33 + attestationByteSize, // data.length should be 1 + 32 + 197 = 230
        discrepancy: data.length - (33 + attestationByteSize),
      })
      return data
    }
  },
)