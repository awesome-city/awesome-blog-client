import {createReducer, on} from '@ngrx/store';
import {initialState} from '../app.state';
import {loadingEndAction, loadingStartAction} from '../actions/loading.action';

export const loadingReducer = createReducer(
  initialState,
  on(loadingStartAction, (state, {label}) => ({
    ...state, loading: state.loading.add(label)
  })),
  on(loadingEndAction, (state, {label}) => {
    state.loading.delete(label);
    return ({
      ...state, loading: state.loading
    });
  })
)
