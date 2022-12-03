import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetArticleResponse } from '../../../models/http/article/get-article-response';
import { GetArticlesResponse } from '../../../models/http/article/get-articles-response';
import { Article } from '../../../models/entity/article';
import { PutArticleResponse } from '../../../models/http/article/put-article-response';
import { PostArticleResponse } from '../../../models/http/article/post-article-response';
import { PostPublishArticleResponse } from '../../../models/http/article/post-publish-article-response';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  findById(articleId: string): Observable<GetArticleResponse> {
    return of({
      id: 'id1',
      author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary:
        'EC2の無料期間が終了してしまい、正規の利用料金を払わなければならなくなり、\n' +
        'EC2とロードバランサーを合わせて、月額3,000円強かかるようになってしまいました。\n',
      tags: [
        { id: 'hoge', name: 'AWS', color: '#eee' },
        { id: 'hoge', name: 'AWS', color: '#eee' },
      ],
      thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
      title: 'Docker 構成の WordPress を EC2 から Lightsail にお引越し',
    });
    // const url = StringUtils.format(API.GET_ARTICLE, {id: articleId});
    // return this.http.get<Article>(url);
  }

  findAll(param?: FindArticlesParam): Observable<GetArticlesResponse> {
    // const url = API.GET_ARTICLES;
    // let params = new HttpParams();
    // params = limit ? params.set('limit', `${limit}`) : params;
    // params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    // return this.http.get<GetArticlesResponse>(url, {params});

    return of({
      lastEvaluatedKey: 'key',
      list: [
        {
          id: 'id1',
          author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
          body: 'body',
          coverImageUrl: '',
          publishAt: '2022-10-07',
          summary:
            'EC2の無料期間が終了してしまい、正規の利用料金を払わなければならなくなり、\n' +
            'EC2とロードバランサーを合わせて、月額3,000円強かかるようになってしまいました。\n',
          tags: [
            { id: 'hoge', name: 'AWS', color: '#eee' },
            { id: 'hoge', name: 'AWS', color: '#eee' },
          ],
          thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
          title: 'Docker 構成の WordPress を EC2 から Lightsail にお引越し',
        },
        {
          id: 'i2',
          author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
          body: 'body',
          coverImageUrl: '',
          publishAt: '2022-10-07',
          summary: 'sum',
          tags: [],
          thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
          title: 'title',
        },
      ],
    });
  }

  create(article: Article): Observable<PostArticleResponse> {
    return of({
      id: 'id1',
      author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary:
        'EC2の無料期間が終了してしまい、正規の利用料金を払わなければならなくなり、\n' +
        'EC2とロードバランサーを合わせて、月額3,000円強かかるようになってしまいました。\n',
      tags: [
        { id: 'hoge', name: 'AWS', color: '#eee' },
        { id: 'hoge', name: 'AWS', color: '#eee' },
      ],
      thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
      title: 'Docker 構成の WordPress を EC2 から Lightsail にお引越し',
    });
  }

  save(article: Article): Observable<PutArticleResponse> {
    return of({
      id: 'id1',
      author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary:
        'EC2の無料期間が終了してしまい、正規の利用料金を払わなければならなくなり、\n' +
        'EC2とロードバランサーを合わせて、月額3,000円強かかるようになってしまいました。\n',
      tags: [
        { id: 'hoge', name: 'AWS', color: '#eee' },
        { id: 'hoge', name: 'AWS', color: '#eee' },
      ],
      thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
      title: 'Docker 構成の WordPress を EC2 から Lightsail にお引越し',
    });
  }

  publish(id: string): Observable<PostPublishArticleResponse> {
    return of({
      id: 'id1',
      author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary:
        'EC2の無料期間が終了してしまい、正規の利用料金を払わなければならなくなり、\n' +
        'EC2とロードバランサーを合わせて、月額3,000円強かかるようになってしまいました。\n',
      tags: [
        { id: 'hoge', name: 'AWS', color: '#eee' },
        { id: 'hoge', name: 'AWS', color: '#eee' },
      ],
      thumbnailUrl: 'https://4mo.co/wp-content/uploads/2022/06/WordPress-Docker-Lightsail.jpg.webp',
      title: 'Docker 構成の WordPress を EC2 から Lightsail にお引越し',
    });
  }

  delete(id: string): Observable<void> {
    return of(undefined);
  }
}

export interface FindArticlesParam {
  limit?: number;
  lastEvaluatedKey?: string;
  tag?: string;
  status?: 'published' | 'draft';
}
