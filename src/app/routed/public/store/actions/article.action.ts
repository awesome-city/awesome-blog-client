import {createAction, props} from '@ngrx/store';
import {Article} from "../../../../models/article";
import {Paging} from "../../../../models/paging";

export const loadArticles = createAction(
  '[Article] load',
  props<{ limit?: number }>()
);

export const loadArticlesSuccess = createAction(
  '[Article] load - Success',
  props<Paging<Article>>()
);

export const loadArticlesFailure = createAction(
  '[Article] load - Failure'
);

export const loadMoreArticles = createAction(
  '[Article] load more',
  props<{ limit?: number }>()
);

export const loadMoreArticlesSuccess = createAction(
  '[Article] load more - Success',
  props<Paging<Article>>()
);

export const loadMoreArticlesFailure = createAction(
  '[Article] load more - Failure'
);

export type ArticleAction =
  typeof loadArticles
  | typeof loadArticlesSuccess
  | typeof loadArticlesFailure
  | typeof loadMoreArticles
  | typeof loadMoreArticlesSuccess
  | typeof loadMoreArticlesFailure;
