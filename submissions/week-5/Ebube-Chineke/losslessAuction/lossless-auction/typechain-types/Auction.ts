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

export interface AuctionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contractBalance"
      | "endTime"
      | "getMinimumBid"
      | "highestBid"
      | "highestBidder"
      | "item"
      | "placeBid"
      | "seller"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AuctionEnded" | "NewBid" | "Refund"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "contractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMinimumBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBidder",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "item", values?: undefined): string;
  encodeFunctionData(functionFragment: "placeBid", values?: undefined): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "contractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highestBidder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "item", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace AuctionEndedEvent {
  export type InputTuple = [winner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [winner: string, amount: bigint];
  export interface OutputObject {
    winner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewBidEvent {
  export type InputTuple = [bidder: AddressLike, amount: BigNumberish];
  export type OutputTuple = [bidder: string, amount: bigint];
  export interface OutputObject {
    bidder: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RefundEvent {
  export type InputTuple = [bidder: AddressLike, amount: BigNumberish];
  export type OutputTuple = [bidder: string, amount: bigint];
  export interface OutputObject {
    bidder: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Auction extends BaseContract {
  connect(runner?: ContractRunner | null): Auction;
  waitForDeployment(): Promise<this>;

  interface: AuctionInterface;

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

  contractBalance: TypedContractMethod<[], [bigint], "view">;

  endTime: TypedContractMethod<[], [bigint], "view">;

  getMinimumBid: TypedContractMethod<[], [bigint], "view">;

  highestBid: TypedContractMethod<[], [bigint], "view">;

  highestBidder: TypedContractMethod<[], [string], "view">;

  item: TypedContractMethod<[], [string], "view">;

  placeBid: TypedContractMethod<[], [void], "payable">;

  seller: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "endTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMinimumBid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "highestBid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "highestBidder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "item"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "placeBid"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "seller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AuctionEnded"
  ): TypedContractEvent<
    AuctionEndedEvent.InputTuple,
    AuctionEndedEvent.OutputTuple,
    AuctionEndedEvent.OutputObject
  >;
  getEvent(
    key: "NewBid"
  ): TypedContractEvent<
    NewBidEvent.InputTuple,
    NewBidEvent.OutputTuple,
    NewBidEvent.OutputObject
  >;
  getEvent(
    key: "Refund"
  ): TypedContractEvent<
    RefundEvent.InputTuple,
    RefundEvent.OutputTuple,
    RefundEvent.OutputObject
  >;

  filters: {
    "AuctionEnded(address,uint256)": TypedContractEvent<
      AuctionEndedEvent.InputTuple,
      AuctionEndedEvent.OutputTuple,
      AuctionEndedEvent.OutputObject
    >;
    AuctionEnded: TypedContractEvent<
      AuctionEndedEvent.InputTuple,
      AuctionEndedEvent.OutputTuple,
      AuctionEndedEvent.OutputObject
    >;

    "NewBid(address,uint256)": TypedContractEvent<
      NewBidEvent.InputTuple,
      NewBidEvent.OutputTuple,
      NewBidEvent.OutputObject
    >;
    NewBid: TypedContractEvent<
      NewBidEvent.InputTuple,
      NewBidEvent.OutputTuple,
      NewBidEvent.OutputObject
    >;

    "Refund(address,uint256)": TypedContractEvent<
      RefundEvent.InputTuple,
      RefundEvent.OutputTuple,
      RefundEvent.OutputObject
    >;
    Refund: TypedContractEvent<
      RefundEvent.InputTuple,
      RefundEvent.OutputTuple,
      RefundEvent.OutputObject
    >;
  };
}
