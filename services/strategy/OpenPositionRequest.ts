/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * request for query current position
 */
export type OpenPositionRequest = BaseRequest & {
  /**
   * strategyId
   */
  strategyId: number;
  /**
   * using for query next
   */
  lastOpenDateTime?: string | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
