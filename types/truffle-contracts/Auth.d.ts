/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AuthContract extends Truffle.Contract<AuthInstance> {
  "new"(
    deployer: string,
    meta?: Truffle.TransactionDetails
  ): Promise<AuthInstance>;
}

type AllEvents = never;

export interface AuthInstance extends Truffle.ContractInstance {
  isAdministrator(
    user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    isAdministrator(
      user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}