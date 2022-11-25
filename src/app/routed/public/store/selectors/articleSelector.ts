import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureName, PublicState } from '../public.state';

export const getState = createFeatureSelector<PublicState>(featureName);

export const ArticleSelector = {
  getArticleById: (id: string) => createSelector(getState, (state) => state.articles.entities.get(id)),
  getArticles: createSelector(getState, (state) => state.articles.ids.map((idx) => state.articles.entities.get(idx))),
  getArticleMap: createSelector(getState, (state) => state.articles.entities),
  getArticlesLastEvaluatedKey: createSelector(getState, (state) => state.articles.lastEvaluatedKey),
  getArticlesByTag: (id: string) => createSelector(getState, (state) => state.articlesByTag.get(id)),
};
