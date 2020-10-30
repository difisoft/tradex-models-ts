/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * fixSecurityListQueryResponse schema
 */
export interface FixSecurityListQueryResponse {
  /**
   * instrumentCode
   */
  ic?: string;
  /**
   * cfiCode
   */
  cc?: string;
  /**
   * currency
   */
  c?: string;
  /**
   * securityExchange
   */
  se?: string;
  /**
   * securityDescription
   */
  sd?: string;
  /**
   * roundLot
   */
  rl?: number;
  /**
   * minTradeVolume
   */
  mtv?: number;
  /**
   * contractMultiplier
   */
  cm?: number;
  /**
   * maturityMonthYear
   */
  mmy?: string;
  /**
   * maturityDate
   */
  md?: string;
  /**
   * securityType
   */
  st?: string;
  /**
   * underlyingSymbol
   */
  us?: string;
  /**
   * ceilingPrice
   */
  cp?: number;
  /**
   * floorPrice
   */
  fp?: number;
  /**
   * exercisePrice
   */
  ep?: number;
  /**
   * exerciseRatio
   */
  er?: string;
  /**
   * baseCodeSecuritiesType
   */
  bc?: string;
  [k: string]: any;
}
