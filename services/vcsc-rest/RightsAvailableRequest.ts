/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Rights available request schema
 */
export type RightsAvailableRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Right type
   */
  rightType?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  /**
   * Last base date
   */
  lastBaseDate?: null | string;
  /**
   * Last stock code
   */
  lastStockCode?: null | string;
  /**
   * Last sequence number
   */
  lastSequenceNumber?: null | string;
  [k: string]: any;
};
