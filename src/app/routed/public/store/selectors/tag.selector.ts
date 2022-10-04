import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName } from '../public.state';

const getState = createFeatureSelector<State>(featureName);

export const getTags = createSelector(getState, state => state.tags);
