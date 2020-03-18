/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Transfer im fee request schema
 */
export type TransferImFeeRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Sending bank
   */
  sendingBank?: null | string;
  /**
   * Receiving bank
   */
  receivingBank?: null | string;
  /**
   * Amount
   */
  amount?: null | number;
  /**
   * Type
   */
  type?: null | string;
  [k: string]: any;
};