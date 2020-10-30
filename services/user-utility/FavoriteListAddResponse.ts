/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * favoriteListAddResponse schema
 */
export interface FavoriteListAddResponse {
  /**
   * id of the favorite list
   */
  id?: number;
  /**
   * name of the favorite list
   */
  name?: string;
  /**
   * order of the favorite list
   */
  order?: number;
  /**
   * number of code in the favorite list
   */
  count?: number;
  /**
   * maximum number of code allowed in a favorite list
   */
  maxCount?: number;
  /**
   * list of code in that favorite list
   */
  itemList?: {
    /**
     * is Note or not. If not a note, count as stock
     */
    isNote?: boolean;
    /**
     * code, exp: VIC
     */
    data?: string;
    [k: string]: any;
  }[];
  [k: string]: any;
}