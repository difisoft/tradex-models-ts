/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Cancel transfer cash request schema
 */
export type TransferCashCancelRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Amount
   */
  amount?: null | number;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Sequence number
   */
  sequenceNumber?: null | string;
  /**
   * Received sub number
   */
  receivedSubNumber?: null | string;
  /**
   * Send sequence number
   */
  sendSequenceNumber?: null | string;
  /**
   * Receive sequence number
   */
  receiveSequenceNumber?: null | string;
  /**
   * Received account number
   */
  receivedAccountNumber?: null | string;
  [k: string]: any;
};