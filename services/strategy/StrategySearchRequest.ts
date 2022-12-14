/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Request for searching Strategy
 */
export type StrategySearchRequest = BaseRequest & {
  /**
   * find by name
   */
  name?: string | null;
  /**
   * find by description
   */
  description?: string | null;
  /**
   * find by name or description
   */
  nameOrDescription?: string | null;
  /**
   * find by type
   */
  type?: null | ("EQUITY" | "DERIVATIVES");
  /**
   * find by status
   */
  status?: null | ("ACTIVE" | "SUSPEND");
  /**
   * sort by EXPECTED PROFIT, REAL PROFIT or SUBSCRIBERS
   */
  sort?: null | ("EXPECTED PROFIT" | "REAL PROFIT" | "SUBSCRIBERS");
  [k: string]: any;
};
