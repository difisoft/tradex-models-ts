/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * orderHistoryRequest schema
 */
export type OrderHistoryRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * From date (YYYYmmdd)
   */
  fromDate?: null | string;
  /**
   * To date (YYYYmmdd)
   */
  toDate?: null | string;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * Match type, [MATCHED, UNMATCHED, ALL]
   */
  matchType?: null | ("MATCHED" | "UNMATCHED" | "ALL");
  /**
   * Sort type, [DESC, ASC]
   */
  sortType?: null | ("DESC" | "ASC");
  /**
   * Last order date (YYYYmmdd)
   */
  lastOrderDate?: null | string;
  /**
   * Last branch code
   */
  lastBranchCode?: null | string;
  /**
   * Last order number
   */
  lastOrderNumber?: null | string;
  /**
   * Last match price
   */
  lastMatchPrice?: null | number;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  /**
   * Market type, [HOSE, HNX, UPCOM, ALL]
   */
  marketType?: null | ("HOSE" | "HNX" | "UPCOM" | "ALL");
  [k: string]: any;
};
