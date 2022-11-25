import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StringUtils } from '../../../utils/string.utils';
import { API } from '../api';
import { Observable, of } from 'rxjs';
import { GetArticleResponse } from '../../../models/http/article/get-article-response';
import { GetArticlesResponse } from '../../../models/http/article/get-articles-response';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  findById(articleId: string): Observable<GetArticleResponse> {
    return of({
      id: 'id',
      author: { id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb' },
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary: 'sum',
      tags: [],
      thumbnailUrl: '',
      title: 'title',
    });
    // const url = StringUtils.format(API.GET_ARTICLE, {id: articleId});
    // return this.http.get<Article>(url);
  }

  findAll(limit?: number, lastEvaluatedKey?: string): Observable<GetArticlesResponse> {
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

  findByTag(tagId: string, limit?: number, lastEvaluatedKey?: string) {
    const url = StringUtils.format(API.GET_ARTICLES_BY_TAG, { id: tagId });
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<GetArticlesResponse>(url, { params });
  }
}
