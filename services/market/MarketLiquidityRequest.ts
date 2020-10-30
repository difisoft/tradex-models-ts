/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * marketLiquidityRequest schema
 */
export type MarketLiquidityRequest = BaseRequest & {
  /**
   * Market type, [HOSE, HNX, UPCOM]
   */
  market: "HOSE" | "HNX" | "UPCOM";
  /**
   * list of date to query
   */
  dateList?: string[];
  [k: string]: any;
};
