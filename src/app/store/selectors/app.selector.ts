import { appFeatureKey, State } from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appSelector = createFeatureSelector<State>(appFeatureKey);

export const isLoading = createSelector(appSelector, (state: State) => state.loading.size > 0);
export const isLoadingByLabel = createSelector(appSelector, (state: State, label: string) => state.loading.has(label));
export const getSite = createSelector(appSelector, (state: State) => state.site);
