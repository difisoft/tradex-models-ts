/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account register request schema
 */
export type AccountRegisterRequest = BaseRequest & {
  /**
   * visit date, format (YYYYMMDD)
   */
  visitDate: string;
  /**
   * issue date, format (YYYYMMDD)
   */
  issueDate: string;
  /**
   * branch, [CA_TP_HN-CP TP Hà Nội, CA_TP_HCM-CA TP HCM]
   */
  issuePlace: "CA_TP_HN" | "CA_TP_HCM";
  /**
   * national 001-201
   */
  national: string;
  /**
   * birth date, format (YYYYMMDD)
   */
  birthDate: string;
  /**
   * identifier number
   */
  nationalId: string;
  /**
   * full name
   */
  fullName: string;
  /**
   * Foreigner Type, [DOMESTIC-C, FOREIGNER-F]
   */
  foreignerType: "DOMESTIC" | "FOREIGNER";
  /**
   * User Type, [PERSONAL-1, ORGANIZATION-2]
   */
  userType: "PERSONAL" | "ORGANIZATION";
  /**
   * branch, [CN_HCM-001, CN_HN-002]
   */
  branch: "CN_HCM" | "CN_HN";
  /**
   * job, [EMPLOYEE-1, STUDENT-2, SELLER-3, NEWSPAPERS-4, INSURRANCE-5, REAL_ESTATE-6, FINANCE_BANKING-7, IT-8, ACCOUNTANT-9, BUILD-10, DOCTOR-11, ADVERTISEMENT-12, MILITARY-13, POLICE-14, FARMER-15, HOUSEWIFE-16, OTHER-99]
   */
  job:
    | "EMPLOYEE"
    | "STUDENT"
    | "SELLER"
    | "NEWSPAPERS"
    | "INSURRANCE"
    | "REAL_ESTATE"
    | "FINANCE_BANKING"
    | "IT"
    | "ACCOUNTANT"
    | "BUILD"
    | "DOCKER"
    | "ADVERTISEMENT"
    | "MILITARY"
    | "POLICE"
    | "FARMER"
    | "HOUSEWIFE"
    | "OTHER";
  /**
   * branch, [MALE-1, FEMALE-2]
   */
  sex: "MALE" | "FEMALE";
  /**
   * office name (company name)
   */
  officeName?: string | null;
  /**
   * address, [HOME-1, OFFICE-2, EMAIL-3]
   */
  addressType: "HOME" | "OFFICE" | "EMAIL";
  /**
   * tel, [HOME-1, OFFICE-2, TEL-3]
   */
  telType: "HOME" | "OFFICE" | "TEL";
  /**
   * sms yes/no, [Y-Y, N-N]
   */
  smsYn: "Y" | "N";
  /**
   * mobile
   */
  mobile: string;
  /**
   * home tel
   */
  homeTel: string;
  /**
   * home address
   */
  homeAddress: string;
  /**
   * office tel
   */
  officeTel?: string | null;
  /**
   * office address
   */
  officeAddress?: string | null;
  /**
   * email
   */
  email?: string | null;
  /**
   * account password
   */
  accountPassword: string;
  /**
   * confirm password
   */
  confirmPassword: string;
  /**
   * htsId (T-Pro ID)
   */
  htsId?: string;
  /**
   * income
   */
  aimRt1?: number;
  /**
   * Growth long-term
   */
  aimRt2?: number;
  /**
   * Growth mid-term
   */
  aimRt3?: number;
  /**
   * Growth short-term
   */
  aimRt4?: number;
  /**
   * Total aim
   */
  totalAim?: number;
  /**
   * low risk
   */
  risk1?: number;
  /**
   * mid risk
   */
  risk2?: number;
  /**
   * high risk
   */
  risk3?: number;
  /**
   * total risk
   */
  totalRisk?: number;
  /**
   * property in a short time
   */
  assetsAmt1?: number;
  /**
   * fixed assets
   */
  assetsAmt2?: number;
  /**
   * net assets
   */
  assetsAmt3?: number;
  /**
   * customer income
   */
  assetsAmt4?: number;
  /**
   * tel, [BEGINNER-1, INTERMEDIATE-2, GROWTH-3, EXPERT-4]
   */
  investType: "BEGINNER" | "INTERMEDIATE" | "GROWTH" | "EXPERT";
  /**
   * tel, [NO_EXPERIENCE-1, TREASURY_BILL-2, STOCK-3, BOND-4, SELL_ONLY-5, OTHER_STOCK-6]
   */
  investExp?: "NO_EXPERIENCE" | "TREASURY_BILL" | "STOCK" | "BOND" | "SELL_ONLY" | "OTHER_STOCK";
  [k: string]: any;
};
