import { createActionGroup, props } from '@ngrx/store';
import { Article } from '../../../../models/article';
import { GetArticlesResponse } from '../../../../models/http/article/get-articles-response';
import { GetArticleResponse } from '../../../../models/http/article/get-article-response';

export const ArticleAction = createActionGroup({
  source: 'Article',
  events: {
    // 記事
    'load one': props<{ id: string; reload?: boolean }>(),
    'load one success': props<{ result?: GetArticleResponse }>(),
    'load one failure': props<{ error: any }>(),

    // 記事一覧
    load: props<{ limit?: number; reload?: boolean }>(),
    'load success': props<{ result: GetArticlesResponse }>(),
    'load failure': props<{ error: any }>(),
    'load more': props<{ limit?: number }>(),
    'load more success': props<{ result: GetArticlesResponse }>(),
    'load more failure': props<{ error: any }>(),

    // タグ別記事一覧
    'load by tag': props<{ tagId: string; limit?: number; reload?: boolean }>(),
    'load by tag success': props<{ tagId: string; result: GetArticlesResponse }>(),
    'load by tag failure': props<{ tagId: string; error: any }>(),
    'load more by tag': props<{ tagId: string; limit?: number }>(),
    'load more by tag success': props<{ tagId: string; result: GetArticlesResponse }>(),
    'load more by tag failure': props<{ tagId: string; error: any }>(),
  },
});
