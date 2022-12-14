/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Stop order modify all request schema
 */
export type StopOrderModifyAllRequest = BaseRequest & {
  /**
   * Stop price
   */
  stopPrice?: null | number;
  /**
   * Futures code
   */
  futuresCode?: null | string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * New stop price
   */
  newStopPrice?: null | number;
  /**
   * Account number
   */
  accountNumber?: null | string;
  [k: string]: any;
};
