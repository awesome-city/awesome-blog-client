import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PublicState, featureName } from '../public.state';

const getState = createFeatureSelector<PublicState>(featureName);

export const getCurrentArticleSelector = createSelector(getState, state => state.article);
export const getCurrentTagSelector = createSelector(getState, state => state.tag);
export const getArticlesSelector = createSelector(getState, state => state.articles);
export const getArticlesByTagSelector = createSelector(getState, state => {
  if (state.tag && state.articlesByTag[state.tag.id]) {
    return state.articlesByTag[state.tag.id];
  } else {
    return {list: []};
  }
});
