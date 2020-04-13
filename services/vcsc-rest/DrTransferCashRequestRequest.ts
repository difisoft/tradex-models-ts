/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Cash transfer request request schema
 */
export type DrTransferCashRequestRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Amount
   */
  amount: string;
  /**
   * Bank code
   */
  bankCode?: null | string;
  /**
   * Sub number
   */
  subNumber: string;
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Received sub number
   */
  receivedSubNumber: string;
  [k: string]: any;
};