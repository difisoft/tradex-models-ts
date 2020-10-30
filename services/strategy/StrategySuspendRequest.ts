/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * The providers can suspend their strategy if it is active
 */
export type StrategySuspendRequest = BaseRequest & {
  /**
   * ID of a strategy for suspending
   */
  strategyId: number;
  [k: string]: any;
};