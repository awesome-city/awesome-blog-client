/**
 * 汎用ページングモデル
 */
import {Entity} from "./entity";

export interface Paging<T> extends Entity<T>{
  lastEvaluatedKey?: string;
}
