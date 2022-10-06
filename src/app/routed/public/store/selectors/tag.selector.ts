import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PublicState, featureName } from '../public.state';

const getState = createFeatureSelector<PublicState>(featureName);

export const getTags = createSelector(getState, state => state.tags);
