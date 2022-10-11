import {createAction, props} from '@ngrx/store';
import {Article} from "../../../../models/article";
import {Paging} from "../../../../models/common/paging";

export const loadArticlesByTag = createAction(
  '[Article] load',
  props<{ tagId: string, limit?: number }>()
);

export const loadArticlesByTagSuccess = createAction(
  '[Article] load - Success',
  props<{ tagId: string, articles: Paging<Article> }>()
);

export const loadArticlesByTagFailure = createAction(
  '[Article] load - Failure'
);

export const loadMoreArticlesByTag = createAction(
  '[Article] load more',
  props<{ tagId: string, limit?: number }>()
);

export const loadMoreArticlesByTagSuccess = createAction(
  '[Article] load more - Success',
  props<{ tagId: string, articles: Paging<Article> }>()
);

export const loadMoreArticleByTagFailure = createAction(
  '[Article] load more - Failure'
);

// export const navigateArtickesByTagAction = createAction(
//
// )
