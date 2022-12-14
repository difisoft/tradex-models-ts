/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Query order oddlot unmatch response schema
 */
export interface StockOrderOddlotUnmatchResponse {
  /**
   * Status
   */
  status?: null | string;
  /**
   * Bank name
   */
  bankName?: null | string;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Branch code
   */
  branchCode?: null | string;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Order number
   */
  orderNumber?: null | string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Order quantity
   */
  orderQuantity?: null | number;
  [k: string]: any;
}
