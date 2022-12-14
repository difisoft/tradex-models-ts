/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * strategyEditRequest schema
 */
export type StrategyEditRequest = BaseRequest & {
  /**
   * strategyId
   */
  strategyId: number;
  /**
   * name of the strategy
   */
  name?: string | null;
  /**
   * description of the strategy
   */
  description?: string | null;
  /**
   * expected profit of the strategy
   */
  expectedProfit?: number | null;
  /**
   * expected max drawdown of the strategy
   */
  expectedMaxDrawdown?: number | null;
  /**
   * simulation image of the strategy
   */
  simulationImage?: string | null;
  /**
   * type of the strategy
   */
  type?: null | ("EQUITY" | "DERIVATIVES");
  [k: string]: any;
};
