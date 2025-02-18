/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface PeteStakeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MIN_STAKE_TIME_IN_DAYS"
      | "REWARD_RATE"
      | "calculateReward"
      | "getStakeStartTime"
      | "getStakedAmount"
      | "peteToken"
      | "peteTokenAddress"
      | "stake"
      | "stakes"
      | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Staked" | "Withdrawn"): EventFragment;

  encodeFunctionData(
    functionFragment: "MIN_STAKE_TIME_IN_DAYS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeStartTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "peteToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "peteTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MIN_STAKE_TIME_IN_DAYS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peteToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peteTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace StakedEvent {
  export type InputTuple = [
    user: AddressLike,
    amount: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [user: string, amount: bigint, timestamp: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    user: AddressLike,
    amount: BigNumberish,
    reward: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    amount: bigint,
    reward: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    user: string;
    amount: bigint;
    reward: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PeteStake extends BaseContract {
  connect(runner?: ContractRunner | null): PeteStake;
  waitForDeployment(): Promise<this>;

  interface: PeteStakeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MIN_STAKE_TIME_IN_DAYS: TypedContractMethod<[], [bigint], "view">;

  REWARD_RATE: TypedContractMethod<[], [bigint], "view">;

  calculateReward: TypedContractMethod<
    [_staker: AddressLike],
    [bigint],
    "view"
  >;

  getStakeStartTime: TypedContractMethod<
    [_staker: AddressLike],
    [bigint],
    "view"
  >;

  getStakedAmount: TypedContractMethod<
    [_staker: AddressLike],
    [bigint],
    "view"
  >;

  peteToken: TypedContractMethod<[], [string], "view">;

  peteTokenAddress: TypedContractMethod<[], [string], "view">;

  stake: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  stakes: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, boolean] & {
        amount: bigint;
        startTime: bigint;
        active: boolean;
      }
    ],
    "view"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MIN_STAKE_TIME_IN_DAYS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "REWARD_RATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculateReward"
  ): TypedContractMethod<[_staker: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStakeStartTime"
  ): TypedContractMethod<[_staker: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStakedAmount"
  ): TypedContractMethod<[_staker: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "peteToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peteTokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, boolean] & {
        amount: bigint;
        startTime: bigint;
        active: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Staked(address,uint256,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "Withdrawn(address,uint256,uint256,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
