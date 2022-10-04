import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName } from '../public.state';

const getState = createFeatureSelector<State>(featureName);

export const getCurrentArticle = createSelector(getState, state => state.article);
export const getCurrentTag = createSelector(getState, state => state.tag);
export const getArticles = createSelector(getState, state => state.articles);
export const getArticlesByTag = createSelector(getState, state => {
  if (state.tag && state.articlesByTag[state.tag.id]) {
    return state.articlesByTag[state.tag.id];
  } else {
    return {list: []};
  }
});
