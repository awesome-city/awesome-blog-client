import { adminFeatureKey, State } from '../admin.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getState = createFeatureSelector<State>(adminFeatureKey);

export const AdminSelectors = {
  getPublishedArticles: createSelector(getState, (state) => state.articles.published.getAll()),
  getPublishedArticlesLastEvaluatedKey: createSelector(getState, (state) => state.articles.published.lastEvaluatedKey),
  getDraftArticles: createSelector(getState, (state) => state.articles.draft.getAll()),
  getDraftArticlesLastEvaluatedKey: createSelector(getState, (state) => state.articles.draft.lastEvaluatedKey),
  getArticle: (id: string) =>
    createSelector(getState, (state) => state.articles.published.get(id) || state.articles.draft.get(id)),
};
