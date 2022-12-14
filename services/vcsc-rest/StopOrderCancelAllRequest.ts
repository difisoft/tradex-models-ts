/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Stop order cancel all request schema
 */
export type StopOrderCancelAllRequest = BaseRequest & {
  /**
   * Stop price
   */
  stopPrice?: null | number;
  /**
   * Futures code
   */
  futuresCode?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * #iffutures codeis none-> ignoreorder pricesell buy type
   */
  "#iffuturesCodeisNone->IgnoreorderPricesellBuyType"?: null | string;
  [k: string]: any;
};
