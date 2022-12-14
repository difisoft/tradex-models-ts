/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account sellable response schema
 */
export interface AccountSellableResponse {
  /**
   * T1 buy
   */
  t1Buy?: null | number;
  /**
   * T2 buy
   */
  t2Buy?: null | number;
  /**
   * T1 sell
   */
  t1Sell?: null | number;
  /**
   * T2 sell
   */
  t2Sell?: null | number;
  /**
   * Today buy
   */
  todayBuy?: null | number;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Today sell
   */
  todaySell?: null | number;
  /**
   * Balance quantity
   */
  balanceQuantity?: null | number;
  /**
   * Sellable quantity
   */
  sellableQuantity?: null | number;
  [k: string]: any;
}
