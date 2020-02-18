/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * fssOrderPlaceRequest schema
 */
export type FssOrderPlaceRequest = BaseRequest & {
  /**
   * account number
   */
  accountNumber: string;
  /**
   * request id
   */
  requestId?: null | string;
  /**
   * order quantity
   */
  orderQuantity: number;
  /**
   * order price
   */
  orderPrice?: null | number;
  /**
   * stock code
   */
  stockCode: string;
  /**
   * sell buy type
   */
  sellBuyType: "SELL" | "BUY";
  /**
   * order type
   */
  orderType: "STOP" | "STOP_LIMIT";
  /**
   * otp (only for kb)
   */
  otpCode?: null | string;
  /**
   * transaction id (only for kb)
   */
  transactionID?: null | number;
  /**
   * channel name (only for kb)
   */
  channelName?: null | string;
  /**
   * token id (only for kb)
   */
  tokenId?: null | string;
  /**
   * pin code (only for kb)
   */
  pinCode?: null | string;
  /**
   * ca thumbPrint (only for kb)
   */
  thumbPrint?: null | string;
  /**
   * ca serial number (only for kb)
   */
  serialNumber?: null | string;
  /**
   * remember 2 factor (only for kb)
   */
  remember2Factor?: null | boolean;
  [k: string]: any;
};
