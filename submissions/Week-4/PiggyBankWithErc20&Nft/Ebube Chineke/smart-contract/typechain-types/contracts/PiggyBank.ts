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

export interface PiggyBankInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contributions"
      | "contributorsCount"
      | "manager"
      | "peteNFT"
      | "peteNFTAddress"
      | "peteToken"
      | "peteTokenAddress"
      | "save"
      | "targetAmount"
      | "withdrawal"
      | "withdrawalDate"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Contributed" | "Withdrawn"): EventFragment;

  encodeFunctionData(
    functionFragment: "contributions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contributorsCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "peteNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "peteNFTAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "peteToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "peteTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "save", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "targetAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalDate",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "contributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contributorsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peteNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peteNFTAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peteToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peteTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "save", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalDate",
    data: BytesLike
  ): Result;
}

export namespace ContributedEvent {
  export type InputTuple = [
    Contributor: AddressLike,
    amount: BigNumberish,
    time: BigNumberish
  ];
  export type OutputTuple = [Contributor: string, amount: bigint, time: bigint];
  export interface OutputObject {
    Contributor: string;
    amount: bigint;
    time: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [amount: BigNumberish, time: BigNumberish];
  export type OutputTuple = [amount: bigint, time: bigint];
  export interface OutputObject {
    amount: bigint;
    time: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PiggyBank extends BaseContract {
  connect(runner?: ContractRunner | null): PiggyBank;
  waitForDeployment(): Promise<this>;

  interface: PiggyBankInterface;

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

  contributions: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  contributorsCount: TypedContractMethod<[], [bigint], "view">;

  manager: TypedContractMethod<[], [string], "view">;

  peteNFT: TypedContractMethod<[], [string], "view">;

  peteNFTAddress: TypedContractMethod<[], [string], "view">;

  peteToken: TypedContractMethod<[], [string], "view">;

  peteTokenAddress: TypedContractMethod<[], [string], "view">;

  save: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  targetAmount: TypedContractMethod<[], [bigint], "view">;

  withdrawal: TypedContractMethod<[], [void], "nonpayable">;

  withdrawalDate: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contributions"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "contributorsCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peteNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peteNFTAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peteToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peteTokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "save"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "targetAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawal"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawalDate"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Contributed"
  ): TypedContractEvent<
    ContributedEvent.InputTuple,
    ContributedEvent.OutputTuple,
    ContributedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Contributed(address,uint256,uint256)": TypedContractEvent<
      ContributedEvent.InputTuple,
      ContributedEvent.OutputTuple,
      ContributedEvent.OutputObject
    >;
    Contributed: TypedContractEvent<
      ContributedEvent.InputTuple,
      ContributedEvent.OutputTuple,
      ContributedEvent.OutputObject
    >;

    "Withdrawn(uint256,uint256)": TypedContractEvent<
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
