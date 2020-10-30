/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Withdraw cancel request schema
 */
export type WithdrawCancelRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Amount
   */
  amount: number;
  /**
   * Bank code
   */
  bankCode: string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Bank account
   */
  bankAccount: string;
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Sequence number
   */
  sequenceNumber: string;
  /**
   * Transaction code
   */
  transactionCode: string;
  /**
   * Transaction type
   */
  transactionType: string;
  [k: string]: any;
};
