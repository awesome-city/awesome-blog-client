/**
 * 汎用ページングモデル
 */
export interface Paging<T> {
  list: T[];
  lastEvaluatedKey?: string;
  loading: boolean
}
