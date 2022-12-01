import { createReducer, on } from '@ngrx/store';
import { initialState } from '../public.state';
import { ArticleAction } from '../actions/article.action';
import { Article } from '../../../../models/article';
import { PagingEntityImpl } from '../../../../models/common/paging-entity';

export const publicReducer = createReducer(
  initialState,
  on(ArticleAction.loadSuccess, (state, { result }) => ({
    ...state,
    articles: new PagingEntityImpl<Article>(result.list, result.lastEvaluatedKey),
  })),
  on(ArticleAction.loadFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadMoreSuccess, (state, { result }) => {
    if (result.lastEvaluatedKey !== state.articles.lastEvaluatedKey) {
      const current = state.articles;
      return {
        ...state,
        articles: current.addWithLastEvaluatedKey
          ? current.addWithLastEvaluatedKey(result.list, result.lastEvaluatedKey)
          : state.articles,
      };
    } else {
      return state;
    }
  }),
  on(ArticleAction.loadMoreFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadByTagSuccess, (state, { tagId, result }) => ({
    ...state,
    articles: state.articles.add ? state.articles.add(result.list, true) : state.articles,
    articlesByTag: state.articlesByTag.set(tagId, new PagingEntityImpl(result.list, result.lastEvaluatedKey)),
  })),
  on(ArticleAction.loadByTagFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadMoreByTagSuccess, (state, { tagId, result }) => {
    const current = state.articlesByTag.get(tagId);
    if (current && result.lastEvaluatedKey !== current.lastEvaluatedKey) {
      return {
        ...state,
        articles: state.articles.add ? state.articles.add(result.list, true) : state.articles,
        articlesByTag: state.articlesByTag.set(
          tagId,
          current.addWithLastEvaluatedKey
            ? current.addWithLastEvaluatedKey(result.list, result.lastEvaluatedKey)
            : current
        ),
      };
    } else {
      return state;
    }
  }),
  on(ArticleAction.loadMoreByTagFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadOneSuccess, (state, { id, result }) => {
    return {
      ...state,
      articles: state.articles.add && result ? state.articles.add([result], true) : state.articles,
    };
  }),
  on(ArticleAction.loadOneFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
