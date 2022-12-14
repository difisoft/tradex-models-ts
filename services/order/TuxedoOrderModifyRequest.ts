/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * tuxedoOrderModifyRequest schema
 */
export type TuxedoOrderModifyRequest = BaseRequest & {
  /**
   * account Number
   */
  accountNumber: string;
  /**
   * sub Number
   */
  subNumber?: null | string;
  /**
   * stock Code
   */
  stockCode: string;
  /**
   * order Quantity
   */
  orderQuantity: number;
  /**
   * order Price
   */
  orderPrice?: null | number;
  /**
   * order number
   */
  orderNumber?: string;
  /**
   * sell Buy Type
   */
  sellBuyType: "SELL" | "BUY";
  /**
   * order Type
   */
  orderType: "ATO" | "ATC" | "MP" | "MTL" | "MOK" | "MAK" | "LO" | "PLO";
  /**
   * bank Code
   */
  bankCode: string;
  /**
   * bank Account
   */
  bankAccount: string;
  /**
   * bank Name
   */
  bankName?: string;
  /**
   * marketType
   */
  marketType?: "HOSE" | "HNX" | "UPCOM";
  /**
   * branchCode
   */
  branchCode?: string;
  /**
   * securitiesType
   */
  securitiesType: "STOCK" | "FUND" | "BOND" | "ETF" | "FUTURES" | "CW";
  [k: string]: any;
};
