/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * basketOrderSubmitRequest schema
 */
export type BasketOrderSubmitRequest = BaseRequest & {
  /**
   * account number
   */
  accountNumber: string;
  /**
   * sub number
   */
  subNumber: string;
  /**
   * basket order name
   */
  name: string;
  /**
   * number of creation unit
   */
  noOfCu: number;
  /**
   * price type
   */
  priceType:
    | "BEST_ASK_1"
    | "BEST_ASK_2"
    | "BEST_BID_1"
    | "BEST_BID_2"
    | "ATO"
    | "ATC"
    | "LO"
    | "MARKET_PRICE"
    | "ADVANCE";
  /**
   * rounding
   */
  rounding: "UP" | "DOWN";
  /**
   * sell buy type
   */
  sellBuyType: "SELL" | "BUY";
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
  bankName: string;
  /**
   * List of order will be placed
   */
  orderList?: [
    {
      /**
       * symbol code
       */
      symbolCode: string;
      /**
       * number of creation unit
       */
      noOfCu?: number;
      /**
       * quantity
       */
      quantity: number;
      /**
       * volume
       */
      volume: number;
      /**
       * price
       */
      price: number;
      /**
       * price type
       */
      priceType:
        | "BEST_ASK_1"
        | "BEST_ASK_2"
        | "BEST_BID_1"
        | "BEST_BID_2"
        | "ATO"
        | "ATC"
        | "LO"
        | "MARKET_PRICE"
        | "ADVANCE";
      /**
       * order type. Only use for priceType = ADVANCE)
       */
      orderType?: "ATO" | "ATC" | "LO" | "MP" | "MOK" | "MAK" | "MTL" | "PLO";
      /**
       * rounding
       */
      rounding: "UP" | "DOWN";
      /**
       * sell buy type
       */
      sellBuyType: "SELL" | "BUY";
      [k: string]: any;
    },
    ...{
      /**
       * symbol code
       */
      symbolCode: string;
      /**
       * number of creation unit
       */
      noOfCu?: number;
      /**
       * quantity
       */
      quantity: number;
      /**
       * volume
       */
      volume: number;
      /**
       * price
       */
      price: number;
      /**
       * price type
       */
      priceType:
        | "BEST_ASK_1"
        | "BEST_ASK_2"
        | "BEST_BID_1"
        | "BEST_BID_2"
        | "ATO"
        | "ATC"
        | "LO"
        | "MARKET_PRICE"
        | "ADVANCE";
      /**
       * order type. Only use for priceType = ADVANCE)
       */
      orderType?: "ATO" | "ATC" | "LO" | "MP" | "MOK" | "MAK" | "MTL" | "PLO";
      /**
       * rounding
       */
      rounding: "UP" | "DOWN";
      /**
       * sell buy type
       */
      sellBuyType: "SELL" | "BUY";
      [k: string]: any;
    }[]
  ];
  [k: string]: any;
};