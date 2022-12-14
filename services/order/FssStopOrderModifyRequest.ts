/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * fssStopOrderModifyRequest schema
 */
export type FssStopOrderModifyRequest = BaseRequest & {
  /**
   * account number
   */
  accountNumber: string;
  /**
   * order quantity
   */
  stockCode: string;
  /**
   * orderQuantity
   */
  orderQuantity?: number;
  /**
   * sell buy type
   */
  sellBuyType: "SELL" | "BUY";
  /**
   * order type
   */
  orderType: "STOP" | "STOP_LIMIT";
  /**
   * old stop price
   */
  stopPrice: number;
  /**
   * new stop price
   */
  newStopPrice?: null | number;
  /**
   * old order price
   */
  orderPrice?: null | number;
  /**
   * new order price
   */
  newOrderPrice?: null | number;
  /**
   * securities type
   */
  securitiesType?: "STOCK" | "FUND" | "BOND" | "ETF" | "FUTURES";
  /**
   * old from date, format (YYYYMMDD)
   */
  fromDate?: null | string;
  /**
   * old to date, format (YYYYMMDD)
   */
  toDate?: null | string;
  /**
   * new from date, format (YYYYMMDD)
   */
  newFromDate?: null | string;
  /**
   * new to date, format (YYYYMMDD)
   */
  newToDate?: null | string;
  [k: string]: any;
};
