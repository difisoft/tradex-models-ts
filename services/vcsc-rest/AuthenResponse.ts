/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {UserData} from "./UserData";

import {UserInfo} from "./UserInfo";

/**
 * authenResponse schema
 */
export interface AuthenResponse {
  /**
   * otp index
   */
  otpIndex?: string;
  /**
   * session id (or JSESSIONID)
   */
  sessionId?: string;
  /**
   * user data
   */
  userData?: {
    [k: string]: UserData;
  };
  /**
   * user info
   */
  userInfo?: {
    [k: string]: UserInfo;
  };
  [k: string]: any;
}
