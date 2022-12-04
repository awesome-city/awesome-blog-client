import { createReducer, on } from '@ngrx/store';
import { initialState } from '../admin.state';
import { AdminApiAction } from '../actions/admin-api.action';
import { PagingEntityImpl } from '../../../../models/common/paging-entity';
import { Article } from '../../../../models/entity/article';

export const adminReducer = createReducer(
  initialState,

  /**
   * 公開済記事一覧
   */
  on(AdminApiAction.loadPublishedSuccess, (state, { result }) => ({
    ...state,
    articles: {
      ...state.articles,
      published: new PagingEntityImpl<Article>(result.list, result.lastEvaluatedKey),
    },
  })),
  on(AdminApiAction.loadPublishedFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(AdminApiAction.loadPublishedMoreSuccess, (state, { result }) => {
    const current = state.articles.published;
    if (result.lastEvaluatedKey !== current.lastEvaluatedKey) {
      return {
        ...state,
        articles: {
          ...state.articles,
          published: current.addWithLastEvaluatedKey
            ? current.addWithLastEvaluatedKey(result.list, result.lastEvaluatedKey)
            : current,
        },
      };
    } else {
      return state;
    }
  }),
  on(AdminApiAction.loadPublishedMoreFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  /**
   * 未公開記事一覧
   */
  on(AdminApiAction.loadDraftSuccess, (state, { result }) => ({
    ...state,
    articles: {
      ...state.articles,
      draft: new PagingEntityImpl<Article>(result.list, result.lastEvaluatedKey),
    },
  })),
  on(AdminApiAction.loadDraftFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(AdminApiAction.loadDraftMoreSuccess, (state, { result }) => {
    const current = state.articles.draft;
    if (result.lastEvaluatedKey !== current.lastEvaluatedKey) {
      return {
        ...state,
        articles: {
          ...state.articles,
          draft: current.addWithLastEvaluatedKey
            ? current.addWithLastEvaluatedKey(result.list, result.lastEvaluatedKey)
            : current,
        },
      };
    } else {
      return state;
    }
  }),
  on(AdminApiAction.loadDraftMoreFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(AdminApiAction.loadArticleSuccess, (state, { result }) => {
    if (result) {
      if (result.publishAt) {
        const current = state.articles.published;
        return {
          ...state,
          articles: {
            ...state.articles,
            published: current.add ? current.add([result], true) : current,
          },
        };
      } else {
        const current = state.articles.draft;
        return {
          ...state,
          articles: {
            ...state.articles,
            draft: current.add ? current.add([result], true) : current,
          },
        };
      }
    } else {
      return state;
    }
  }),
  on(AdminApiAction.loadDraftMoreFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
