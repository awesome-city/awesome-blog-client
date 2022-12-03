import { PagingEntity, PagingEntityImpl } from '../../../models/common/paging-entity';
import { Article } from '../../../models/entity/article';

export const adminFeatureKey = 'admin';

export type ArticlePagingEntity = PagingEntity<Article>;

export interface State {
  articles: {
    published: ArticlePagingEntity;
    draft: ArticlePagingEntity;
  };
}

export const initialState: State = {
  articles: {
    published: new PagingEntityImpl<Article>([]),
    draft: new PagingEntityImpl<Article>([]),
  },
};
