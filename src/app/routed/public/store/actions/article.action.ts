import {createAction, props} from '@ngrx/store';
import {Article} from "../../../../models/article";
import {Paging} from "../../../../models/paging";

export const loadArticleAction = createAction(
  '[Article] load one',
  props<{ id: string }>()
);

export const loadArticleSuccessAction = createAction(
  '[Article] load one - Success',
  props<{ result: Article }>()
);

export const loadArticleFailureAction = createAction(
  '[Article] load one - Failure',
  props<{ error: any }>()
);

export const loadArticlesAction = createAction(
  '[Article] load',
  props<{ limit?: number }>()
);

export const loadArticlesSuccessAction = createAction(
  '[Article] load - Success',
  props<{ result: Paging<Article> }>()
);

export const loadArticlesFailureAction = createAction(
  '[Article] load - Failure',
  props<{ error: any }>()
);

export const loadMoreArticlesAction = createAction(
  '[Article] load more',
  props<{ limit?: number }>()
);

export const loadMoreArticlesSuccessAction = createAction(
  '[Article] load more - Success',
  props<{ result: Paging<Article> }>()
);

export const loadMoreArticlesFailureAction = createAction(
  '[Article] load more - Failure',
  props<{ error: any }>()
);

export type ArticleAction =
  | typeof loadArticleAction
  | typeof loadArticlesAction
  | typeof loadArticlesSuccessAction
  | typeof loadArticlesFailureAction
  | typeof loadMoreArticlesAction
  | typeof loadMoreArticlesSuccessAction
  | typeof loadMoreArticlesFailureAction;
