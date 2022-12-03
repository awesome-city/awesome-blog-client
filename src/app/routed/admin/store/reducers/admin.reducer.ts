import { createReducer } from '@ngrx/store';
import { initialState } from '../admin.state';

export const adminReducer = createReducer(initialState);
