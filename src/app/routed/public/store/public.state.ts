import {Article} from "../../../models/article";
import {Tag} from "../../../models/tag";
import {Paging} from "../../../models/paging";

export const featureName = 'public';

export interface State {
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
}

export const initialState: State = {
  article: undefined,
  tag: undefined,
  articles: {
    list: []
  },
  articlesByTag: {},
  tags: []
};
