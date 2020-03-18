/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Transfer im withdraw request request schema
 */
export type TransferImWithdrawRequestRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Amount
   */
  amount?: null | number;
  /**
   * Fee type
   */
  feeType?: null | string;
  /**
   * Dest bank
   */
  destBank?: null | string;
  /**
   * Fee amount
   */
  feeAmount?: null | number;
  /**
   * Source bank
   */
  sourceBank?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Adjusted amount
   */
  adjustedAmount?: null | number;
  /**
   * Received amount
   */
  receivedAmount?: null | number;
  [k: string]: any;
};