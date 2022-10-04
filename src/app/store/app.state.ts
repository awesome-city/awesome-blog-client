import {Author} from "../models/author";
import {Site} from "../models/site";

export interface State {

  /**
   * ローディング状態
   */
  loading: Map<string, string[]>;

  /**
   * サイト情報
   */
  site?: Site;

  /**
   * 著者
   */
  author?: Author;
}

export const initialState: State = {
  loading: new Map<string, string[]>(),
  site: undefined,
  author: undefined
};
