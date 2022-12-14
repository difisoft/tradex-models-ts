/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * fixSecurityListQueryRequest schema
 */
export type FixSecurityListQueryRequest = BaseRequest & {
  /**
   * symbol code
   */
  instrumentCode?: string;
  /**
   * base date (yyyyMMdd), to query all records have date < baseDate
   */
  lastUpdatedTime?: string | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
