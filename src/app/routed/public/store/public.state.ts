import {Article} from "../../../models/article";
import {Tag} from "../../../models/tag";
import {Paging} from "../../../models/paging";

export const featureName = 'public';

export interface PublicState {
  /**
   * 選択記事
   */
  article?: Article;

  /**
   * 選択タグ
   */
  tag?: Tag;

  /**
   * 記事一覧
   */
  articles: Paging<Article>;

  /**
   * タグ別記事一覧
   */
  articlesByTag: { [key: string]: Paging<Article> }

  /**
   * タグ一覧
   */
  tags: Tag[];

  /**
   * エラー
   */
  error?: any;
}

export const initialState: PublicState = {
  article: undefined,
  tag: undefined,
  articles: {
    list: [],
    loading: false
  },
  articlesByTag: {},
  tags: []
};
