/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * signalHistoryResponse schema
 */
export interface SignalHistoryResponse {
  /**
   * id of signal
   */
  signalId?: number;
  originalId?: number;
  code?: string;
  /**
   * sell buy type
   */
  sellBuyType?: "SELL" | "BUY";
  status?: "NEW" | "EDIT" | "CANCEL";
  time?: string;
  price?: number;
  /**
   * note
   */
  remarks?: string;
  [k: string]: any;
}
