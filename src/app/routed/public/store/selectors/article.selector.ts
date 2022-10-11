import {createFeatureSelector, createSelector} from '@ngrx/store';

import {PublicState, featureName} from '../public.state';

export const getState = createFeatureSelector<PublicState>(featureName);

export const getArticleByIdSelector = (id: string) => createSelector(getState, state => state.articles.entities.get(id));
export const getArticlesSelector = createSelector(getState, state => state.articles.ids.map(idx => state.articles.entities.get(idx)));
export const getArticlesMapSelector = createSelector(getState, state => state.articles.entities);
export const getArticlesLastEvaluatedKey = createSelector(getState, state => state.articles.lastEvaluatedKey);
export const getArticlesByTagSelector = (id: string) => createSelector(getState, state => state.articlesByTag.get(id));
