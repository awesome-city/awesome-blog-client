import { ActionReducer, MetaReducer } from '@ngrx/store';

const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.debug('action', action);
    return reducer(state, action);
  };
};

export const metaReducer: MetaReducer<any>[] = [debug];
