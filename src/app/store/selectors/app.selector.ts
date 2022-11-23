import { appFeatureKey, State } from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appSelector = createFeatureSelector<State>(appFeatureKey);

export const appSelectors = {
  isLoading: createSelector(appSelector, (state: State) => state.loading.size > 0),
  isLoadingByLabel: createSelector(appSelector, (state: State, label: string) => state.loading.has(label)),
  getSite: createSelector(appSelector, (state: State) => state.site),
  getAuthor: createSelector(appSelector, (state: State) => state.author),
};
