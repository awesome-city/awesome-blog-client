import { Article } from '../../../models/article';
import { Tag } from '../../../models/tag';
import { PagingEntity } from '../../../models/common/paging-entity';

export const featureName = 'public';

export type ArticlePagingEntity = PagingEntity<Article>;

export interface PublicState {
  /**
   * 記事一覧
   */
  articles: ArticlePagingEntity;

  /**
   * タグ別記事一覧
   */
  articlesByTag: Map<string, ArticlePagingEntity>;

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
  articles: {
    ids: [],
    entities: new Map<string, Article>(),
  },
  articlesByTag: new Map<string, ArticlePagingEntity>(),
  tags: [],
};
