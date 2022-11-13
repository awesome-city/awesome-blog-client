import { createReducer, on } from '@ngrx/store';
import { initialState } from '../public.state';
import { ArticleAction } from '../actions/article.action';
import { Article } from '../../../../models/article';

export const publicReducer = createReducer(
  initialState,
  on(ArticleAction.loadSuccess, (state, { result }) => ({
    ...state,
    articles: {
      ids: result.list.map((o) => o.id),
      entities: new Map<string, Article>(
        Object.entries(
          result.list.reduce(
            (res, cur) => ({
              ...res,
              [cur.id]: cur,
            }),
            {}
          )
        )
      ),
      lastEvaluatedKey: result.lastEvaluatedKey,
    },
  })),
  on(ArticleAction.loadFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadMoreSuccess, (state, { result }) => {
    if (result.lastEvaluatedKey !== state.articles.lastEvaluatedKey) {
      return {
        ...state,
        articles: {
          ids: [...state.articles.ids, ...result.list.map((o) => o.id)],
          entities: new Map([
            ...state.articles.entities,
            ...new Map<string, Article>(
              Object.entries(result.list.reduce((res, cur) => ({ ...res, [cur.id]: cur }), {}))
            ),
          ]),
          lastEvaluatedKey: result.lastEvaluatedKey,
        },
      };
    } else {
      return state;
    }
  }),
  on(ArticleAction.loadMoreFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ArticleAction.loadOneSuccess, (state, { result }) => {
    if (result) {
      return {
        ...state,
        articles: {
          ...state.articles,
          entities: new Map([...state.articles.entities.entries(), [result.id, result]]),
        },
      };
    } else {
      return state;
    }
  }),
  on(ArticleAction.loadOneFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
