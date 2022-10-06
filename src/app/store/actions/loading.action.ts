import {createAction, props} from "@ngrx/store";

export const loadingStartAction = createAction(
  '[Loading] start',
  props<{ label: string }>()
);

export const loadingEndAction = createAction(
  '[Loading] end',
  props<{ label: string }>()
);
