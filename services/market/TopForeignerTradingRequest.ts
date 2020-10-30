/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * topForeignerTradingRequest schema
 */
export type TopForeignerTradingRequest = BaseRequest & {
  /**
   * market: ALL, HNX, HOSE, UPCOM, default ALL
   */
  marketType?: null | ("ALL" | "HNX" | "HOSE" | "UPCOM");
  /**
   * upDownType, default DOWN
   */
  upDownType?: null | ("UP" | "DOWN");
  /**
   * offset, default 0
   */
  offset?: number | null;
  /**
   * The number of record that user want to see at each page, default = 10
   */
  fetchCount?: number | null;
  [k: string]: any;
};
