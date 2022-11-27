import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureName, PublicState } from '../public.state';
import { Article } from '../../../../models/article';

export const getState = createFeatureSelector<PublicState>(featureName);

export const ArticleSelector = {
  getArticleById: (id: string) => createSelector(getState, (state) => state.articles.entities.get(id)),
  getArticles: createSelector(getState, (state) =>
    state.articles.ids.map((idx) => state.articles.entities.get(idx) as Article)
  ),
  getArticleMap: createSelector(getState, (state) => state.articles.entities),
  getArticlesLastEvaluatedKey: createSelector(getState, (state) => state.articles.lastEvaluatedKey),
  getArticlesByTag: (id: string) =>
    createSelector(getState, (state) => {
      const current = state.articlesByTag.get(id);
      if (current) {
        return current.ids.map((idx) => current.entities.get(idx) as Article);
      } else {
        return [];
      }
    }),
  getArticlesByTagLastEvaluatedKey: (id: string) =>
    createSelector(getState, (state) => state.articlesByTag.get(id)?.lastEvaluatedKey),
};
