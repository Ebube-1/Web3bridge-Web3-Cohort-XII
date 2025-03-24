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
} from "./common";

export interface AuctionFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "admin" | "auctions" | "createAuction" | "getAuctions"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuctions",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuctions",
    data: BytesLike
  ): Result;
}

export namespace AuctionCreatedEvent {
  export type InputTuple = [
    auction: AddressLike,
    itemName: string,
    initialPrice: BigNumberish,
    seller: AddressLike
  ];
  export type OutputTuple = [
    auction: string,
    itemName: string,
    initialPrice: bigint,
    seller: string
  ];
  export interface OutputObject {
    auction: string;
    itemName: string;
    initialPrice: bigint;
    seller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AuctionFactory extends BaseContract {
  connect(runner?: ContractRunner | null): AuctionFactory;
  waitForDeployment(): Promise<this>;

  interface: AuctionFactoryInterface;

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

  admin: TypedContractMethod<[], [string], "view">;

  auctions: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createAuction: TypedContractMethod<
    [itemName: string, initialPrice: BigNumberish, endTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  getAuctions: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "auctions"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createAuction"
  ): TypedContractMethod<
    [itemName: string, initialPrice: BigNumberish, endTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAuctions"
  ): TypedContractMethod<[], [string[]], "view">;

  getEvent(
    key: "AuctionCreated"
  ): TypedContractEvent<
    AuctionCreatedEvent.InputTuple,
    AuctionCreatedEvent.OutputTuple,
    AuctionCreatedEvent.OutputObject
  >;

  filters: {
    "AuctionCreated(address,string,uint256,address)": TypedContractEvent<
      AuctionCreatedEvent.InputTuple,
      AuctionCreatedEvent.OutputTuple,
      AuctionCreatedEvent.OutputObject
    >;
    AuctionCreated: TypedContractEvent<
      AuctionCreatedEvent.InputTuple,
      AuctionCreatedEvent.OutputTuple,
      AuctionCreatedEvent.OutputObject
    >;
  };
}
