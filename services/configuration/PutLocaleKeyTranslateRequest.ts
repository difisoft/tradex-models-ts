/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

import {Language} from "tradex-models-common";

/**
 * request for query list of holiday
 */
export type PutLocaleKeyTranslateRequest = BaseRequest & {
  /**
   * key id
   */
  keyId: number;
  lang?: Language;
  [k: string]: any;
};
