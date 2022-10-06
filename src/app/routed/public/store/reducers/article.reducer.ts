import {createReducer, on} from '@ngrx/store';
import {initialState} from '../public.state';
import {
  loadArticleFailureAction, loadArticlesAction,
  loadArticlesFailureAction,
  loadArticlesSuccessAction,
  loadArticleSuccessAction, loadMoreArticlesAction,
  loadMoreArticlesFailureAction,
  loadMoreArticlesSuccessAction
} from '../actions/article.action';

export const reducer = createReducer(
  initialState,
  on(loadArticlesAction, (state, {}) => ({
    ...state, articles: {
      list: state.articles.list,
      lastEvaluatedKey: state.articles.lastEvaluatedKey,
      loading: true
    }
  })),
  on(loadArticlesSuccessAction, (state, {result}) => ({
    ...state, articles: {
      list: result.list,
      lastEvaluatedKey: result.lastEvaluatedKey,
      loading: false
    }
  })),
  on(loadArticlesFailureAction, (state, {error}) => ({
    ...state, articles: {
      list: state.articles.list,
      lastEvaluatedKey: state.articles.lastEvaluatedKey,
      loading: false
    }, error: error
  })),
  on(loadMoreArticlesAction, (state, {}) => ({
    ...state, articles: {
      list: state.articles.list,
      lastEvaluatedKey: state.articles.lastEvaluatedKey,
      loading: true
    }
  })),
  on(loadMoreArticlesSuccessAction, (state, {result}) => ({
    ...state, articles: {
      list: [...state.articles.list, ...result.list],
      lastEvaluatedKey: result.lastEvaluatedKey,
      loading: false
    }
  })),
  on(loadMoreArticlesFailureAction, (state, {error}) => ({...state, error: error})),
  on(loadArticleSuccessAction, (state, {result}) => ({...state, article: result})),
  on(loadArticleFailureAction, (state, {error}) => ({...state, error: error})),
);
