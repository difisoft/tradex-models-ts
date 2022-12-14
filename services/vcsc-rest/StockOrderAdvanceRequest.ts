/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Place advance order request schema
 */
export type StockOrderAdvanceRequest = BaseRequest & {
  /**
   * Bank code
   */
  bankCode: string;
  /**
   * Order type, [LO , MP , ATO , ATC , AON , BIG_LOT , MOK , MAK , MTL , IO , SO_GREATER , SO_LESS , SBO , OBO , PLO , ALL]
   */
  orderType:
    | "LO"
    | "MP"
    | "ATO"
    | "ATC"
    | "AON"
    | "BIG_LOT"
    | "MOK"
    | "MAK"
    | "MTL"
    | "IO"
    | "SO_GREATER"
    | "SO_LESS"
    | "SBO"
    | "OBO"
    | "PLO"
    | "ALL";
  /**
   * Stock code
   */
  stockCode: string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Order price
   */
  orderPrice: number;
  /**
   * Bank account
   */
  bankAccount: string;
  /**
   * Phone number
   */
  phoneNumber?: null | string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType: "BUY" | "SELL" | "ALL";
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Order quantity
   */
  orderQuantity: number;
  /**
   * Securities type
   */
  securitiesType?: null | string;
  /**
   * Advance order date
   */
  advanceOrderDate?: null | string;
  [k: string]: any;
};
