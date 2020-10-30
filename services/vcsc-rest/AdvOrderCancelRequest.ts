/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Cancel adv order request schema
 */
export type AdvOrderCancelRequest = BaseRequest & {
  /**
   * Code
   */
  code?: null | string;
  /**
   * Order number
   */
  orderNumber?: null | string;
  /**
   * Trading date
   */
  tradingDate?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Market session
   */
  marketSession?: null | string;
  [k: string]: any;
};
