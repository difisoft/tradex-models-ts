/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order today unmatch request schema
 */
export type DrOrderUnmatchListRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Password
   */
  password?: null | string;
  /**
   * Group name
   */
  groupName?: null | string;
  /**
   * Last next key
   */
  lastNextKey?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  [k: string]: any;
};
