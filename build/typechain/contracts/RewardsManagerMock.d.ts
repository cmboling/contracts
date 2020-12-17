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
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RewardsManagerMockInterface extends ethers.utils.Interface {
  functions: {
    "pow(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pow",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "pow", data: BytesLike): Result;

  events: {};
}

export class RewardsManagerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RewardsManagerMockInterface;

  functions: {
    pow(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      z: BigNumber;
      0: BigNumber;
    }>;

    "pow(uint256,uint256,uint256)"(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      z: BigNumber;
      0: BigNumber;
    }>;
  };

  pow(
    x: BigNumberish,
    n: BigNumberish,
    base: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pow(uint256,uint256,uint256)"(
    x: BigNumberish,
    n: BigNumberish,
    base: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    pow(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pow(uint256,uint256,uint256)"(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    pow(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pow(uint256,uint256,uint256)"(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pow(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pow(uint256,uint256,uint256)"(
      x: BigNumberish,
      n: BigNumberish,
      base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}