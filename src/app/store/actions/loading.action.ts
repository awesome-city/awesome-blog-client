import {createAction, props} from "@ngrx/store";

export const startLoading = createAction(
  '[Loading] start',
  props<{ label: string, uniqueKey: string }>()
);

export const endLoading = createAction(
  '[Loading] end',
  props<{ label: string, uniqueKey: string }>()
);
