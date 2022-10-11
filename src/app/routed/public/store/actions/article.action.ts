import {createActionGroup, props} from '@ngrx/store';
import {Article} from "../../../../models/article";
import {GetArticlesResponse} from "../../../../models/http/article/get-articles-response";
import {GetArticleResponse} from "../../../../models/http/article/get-article-response";

export const ArticleAction = createActionGroup({
  source: 'Article',
  events: {
    'load one': props<{ id: string, reload?: boolean }>(),
    'load one success': props<{ result?: GetArticleResponse }>(),
    'load one failure': props<{ error: any }>(),
    'load': props<{ limit?: number, reload?: boolean }>(),
    'load success': props<{ result: GetArticlesResponse }>(),
    'load failure': props<{ error: any }>(),
    'load more': props<{ limit?: number }>(),
    'load more success': props<{ result: GetArticlesResponse }>(),
    'load more failure': props<{ error: any }>()
  }
})
