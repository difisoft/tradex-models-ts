/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order history request schema
 */
export type DrOrderHistoryRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Password
   */
  password?: null | string;
  /**
   * Date
   */
  date?: null | string;
  /**
   * Last next key
   */
  lastNextKey?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  /**
   * Branch code
   */
  branchCode?: null | string;
  /**
   * Agency code
   */
  agencyCode?: null | string;
  /**
   * Emp group id
   */
  empGroupId?: null | string;
  [k: string]: any;
};
