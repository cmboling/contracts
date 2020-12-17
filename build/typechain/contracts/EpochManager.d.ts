/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EpochManagerInterface extends ethers.utils.Interface {
  functions: {
    "acceptProxy(address)": FunctionFragment;
    "acceptProxyAndCall(address,bytes)": FunctionFragment;
    "addressCache(bytes32)": FunctionFragment;
    "blockHash(uint256)": FunctionFragment;
    "blockNum()": FunctionFragment;
    "controller()": FunctionFragment;
    "currentEpoch()": FunctionFragment;
    "currentEpochBlock()": FunctionFragment;
    "currentEpochBlockSinceStart()": FunctionFragment;
    "epochLength()": FunctionFragment;
    "epochsSince(uint256)": FunctionFragment;
    "epochsSinceUpdate()": FunctionFragment;
    "initialize(address,uint256)": FunctionFragment;
    "isCurrentEpochRun()": FunctionFragment;
    "lastLengthUpdateBlock()": FunctionFragment;
    "lastLengthUpdateEpoch()": FunctionFragment;
    "lastRunEpoch()": FunctionFragment;
    "runEpoch()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setEpochLength(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptProxy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "acceptProxyAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressCache",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "blockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "blockNum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpochBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpochBlockSinceStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochsSince",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochsSinceUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isCurrentEpochRun",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastLengthUpdateBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastLengthUpdateEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRunEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "runEpoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEpochLength",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptProxyAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "blockHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blockNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpochBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpochBlockSinceStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochsSince",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochsSinceUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCurrentEpochRun",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastLengthUpdateBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastLengthUpdateEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRunEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "runEpoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEpochLength",
    data: BytesLike
  ): Result;

  events: {
    "EpochLengthUpdate(uint256,uint256)": EventFragment;
    "EpochRun(uint256,address)": EventFragment;
    "ParameterUpdated(string)": EventFragment;
    "SetController(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EpochLengthUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EpochRun"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
}

export class EpochManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EpochManagerInterface;

  functions: {
    acceptProxy(
      _proxy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    blockHash(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "blockHash(uint256)"(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    blockNum(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "blockNum()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    controller(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "controller()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    currentEpoch(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "currentEpoch()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentEpochBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "currentEpochBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentEpochBlockSinceStart(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "currentEpochBlockSinceStart()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochLength(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "epochLength()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochsSince(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "epochsSince(uint256)"(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochsSinceUpdate(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "epochsSinceUpdate()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    initialize(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,uint256)"(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isCurrentEpochRun(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isCurrentEpochRun()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    lastLengthUpdateBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastLengthUpdateBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lastLengthUpdateEpoch(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastLengthUpdateEpoch()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lastRunEpoch(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastRunEpoch()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    runEpoch(overrides?: Overrides): Promise<ContractTransaction>;

    "runEpoch()"(overrides?: Overrides): Promise<ContractTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setEpochLength(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEpochLength(uint256)"(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptProxy(
    _proxy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "acceptProxy(address)"(
    _proxy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  acceptProxyAndCall(
    _proxy: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "acceptProxyAndCall(address,bytes)"(
    _proxy: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addressCache(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  blockHash(_block: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "blockHash(uint256)"(
    _block: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  blockNum(overrides?: CallOverrides): Promise<BigNumber>;

  "blockNum()"(overrides?: CallOverrides): Promise<BigNumber>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  "currentEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

  currentEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "currentEpochBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  currentEpochBlockSinceStart(overrides?: CallOverrides): Promise<BigNumber>;

  "currentEpochBlockSinceStart()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochLength(overrides?: CallOverrides): Promise<BigNumber>;

  "epochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  epochsSince(
    _epoch: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "epochsSince(uint256)"(
    _epoch: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochsSinceUpdate(overrides?: CallOverrides): Promise<BigNumber>;

  "epochsSinceUpdate()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _controller: string,
    _epochLength: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,uint256)"(
    _controller: string,
    _epochLength: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isCurrentEpochRun(overrides?: CallOverrides): Promise<boolean>;

  "isCurrentEpochRun()"(overrides?: CallOverrides): Promise<boolean>;

  lastLengthUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "lastLengthUpdateBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastLengthUpdateEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  "lastLengthUpdateEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastRunEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  "lastRunEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

  runEpoch(overrides?: Overrides): Promise<ContractTransaction>;

  "runEpoch()"(overrides?: Overrides): Promise<ContractTransaction>;

  setController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setEpochLength(
    _epochLength: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEpochLength(uint256)"(
    _epochLength: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProxy(_proxy: string, overrides?: CallOverrides): Promise<void>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    blockHash(_block: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "blockHash(uint256)"(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    blockNum(overrides?: CallOverrides): Promise<BigNumber>;

    "blockNum()"(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpochBlockSinceStart(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochBlockSinceStart()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "epochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    epochsSince(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "epochsSince(uint256)"(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochsSinceUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    "epochsSinceUpdate()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256)"(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isCurrentEpochRun(overrides?: CallOverrides): Promise<boolean>;

    "isCurrentEpochRun()"(overrides?: CallOverrides): Promise<boolean>;

    lastLengthUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastLengthUpdateBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastLengthUpdateEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "lastLengthUpdateEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastRunEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRunEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    runEpoch(overrides?: CallOverrides): Promise<void>;

    "runEpoch()"(overrides?: CallOverrides): Promise<void>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setEpochLength(
      _epochLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setEpochLength(uint256)"(
      _epochLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    EpochLengthUpdate(
      epoch: BigNumberish | null,
      epochLength: null
    ): EventFilter;

    EpochRun(epoch: BigNumberish | null, caller: null): EventFilter;

    ParameterUpdated(param: null): EventFilter;

    SetController(controller: null): EventFilter;
  };

  estimateGas: {
    acceptProxy(_proxy: string, overrides?: Overrides): Promise<BigNumber>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blockHash(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blockHash(uint256)"(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blockNum(overrides?: CallOverrides): Promise<BigNumber>;

    "blockNum()"(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpochBlockSinceStart(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochBlockSinceStart()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "epochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    epochsSince(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "epochsSince(uint256)"(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochsSinceUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    "epochsSinceUpdate()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,uint256)"(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isCurrentEpochRun(overrides?: CallOverrides): Promise<BigNumber>;

    "isCurrentEpochRun()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastLengthUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastLengthUpdateBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastLengthUpdateEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "lastLengthUpdateEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastRunEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRunEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    runEpoch(overrides?: Overrides): Promise<BigNumber>;

    "runEpoch()"(overrides?: Overrides): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setEpochLength(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setEpochLength(uint256)"(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProxy(
      _proxy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockHash(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blockHash(uint256)"(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockNum()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentEpoch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentEpochBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentEpochBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentEpochBlockSinceStart(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "currentEpochBlockSinceStart()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "epochLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochsSince(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "epochsSince(uint256)"(
      _epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochsSinceUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "epochsSinceUpdate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256)"(
      _controller: string,
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isCurrentEpochRun(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isCurrentEpochRun()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastLengthUpdateBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastLengthUpdateBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastLengthUpdateEpoch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastLengthUpdateEpoch()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastRunEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastRunEpoch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    runEpoch(overrides?: Overrides): Promise<PopulatedTransaction>;

    "runEpoch()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setEpochLength(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEpochLength(uint256)"(
      _epochLength: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}