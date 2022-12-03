import { createActionGroup, props } from '@ngrx/store';
import { GetArticlesResponse } from '../../../../models/http/article/get-articles-response';
import { GetArticleResponse } from '../../../../models/http/article/get-article-response';
import { Article } from '../../../../models/entity/article';
import { PostArticleResponse } from '../../../../models/http/article/post-article-response';
import { PutArticleResponse } from '../../../../models/http/article/put-article-response';

export const AdminApiAction = createActionGroup({
  source: 'Admin API',
  events: {
    // 公開済記事一覧
    'load published': props<{ limit?: number; reload?: boolean }>(),
    'load published success': props<{ result: GetArticlesResponse }>(),
    'load published failure': props<{ error: any }>(),
    'load published more': props<{ limit?: number }>(),
    'load published more success': props<{ result: GetArticlesResponse }>(),
    'load published more failure': props<{ error: any }>(),

    // 未公開記事一覧
    'load draft': props<{ limit?: number; reload?: boolean }>(),
    'load draft success': props<{ result: GetArticlesResponse }>(),
    'load draft failure': props<{ error: any }>(),
    'load draft more': props<{ limit?: number }>(),
    'load draft more success': props<{ result: GetArticlesResponse }>(),
    'load draft more failure': props<{ error: any }>(),

    // 記事
    'load article': props<{ id: string; reload?: boolean }>(),
    'load article success': props<{ id: string; result?: GetArticleResponse }>(),
    'load article failure': props<{ id: string; error: any }>(),
    'create article': props<{ article: Article }>(),
    'create article success': props<{ id: string; result?: PostArticleResponse }>(),
    'create article failure': props<{ id: string; error: any }>(),
    'save article': props<{ article: Article }>(),
    'save article success': props<{ id: string; result?: PutArticleResponse }>(),
    'save article failure': props<{ id: string; error: any }>(),
    'publish article': props<{ id: string }>(),
    'publish article success': props<{ id: string; result?: PutArticleResponse }>(),
    'publish article failure': props<{ id: string; error: any }>(),
    'delete article': props<{ id: string }>(),
    'delete article success': props<{ id: string }>(),
    'delete article failure': props<{ id: string; error: any }>(),
  },
});
