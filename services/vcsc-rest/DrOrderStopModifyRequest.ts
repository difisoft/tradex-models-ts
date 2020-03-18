/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order stop modify request schema
 */
export type DrOrderStopModifyRequest = BaseRequest & {
  /**
   * To date (YYYYmmdd)
   */
  toDate?: null | string;
  /**
   * Password
   */
  password?: null | string;
  /**
   * Band price
   */
  bandPrice?: null | number;
  /**
   * Stop price
   */
  stopPrice?: null | number;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Created date
   */
  createdDate?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Order quantity
   */
  orderQuantity?: null | number;
  /**
   * Sequence number
   */
  sequenceNumber?: null | string;
  /**
   * #additionalfieldfrom date
   */
  "#additionalfieldfromDate"?: null | string;
  [k: string]: any;
};