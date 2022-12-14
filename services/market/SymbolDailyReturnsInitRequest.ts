/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * symbolDailyReturnsInitRequest schema
 */
export type SymbolDailyReturnsInitRequest = BaseRequest & {
  /**
   * symbol code list to init
   */
  symbolList?: string[];
  /**
   * init returns from start of floorDate to today, (YYYYMMDD)
   */
  floorDate?: string;
  [k: string]: any;
};
