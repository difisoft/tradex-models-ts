/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Transfer stock request schema
 */
export type TransferStockRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Quantity
   */
  quantity: number;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Limited quantity
   */
  limitedQuantity: number;
  /**
   * Received sub number
   */
  receivedSubNumber: string;
  /**
   * Received account number
   */
  receivedAccountNumber?: null | string;
  [k: string]: any;
};
