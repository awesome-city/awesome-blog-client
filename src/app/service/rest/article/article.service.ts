import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {StringUtils} from "../../../utils/string.utils";
import {API} from "../api";
import {Observable, of} from "rxjs";
import {GetArticleResponse} from "../../../models/http/article/get-article-response";
import {GetArticlesResponse} from "../../../models/http/article/get-articles-response";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  findById(articleId: string): Observable<GetArticleResponse> {
    return of({
      id: 'id',
      author: {id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb'},
      body: 'body',
      coverImageUrl: '',
      publishAt: '2022-10-07',
      summary: 'sum',
      tags: [],
      thumbnailUrl: '',
      title: 'title'
    })
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
      list: [{
        id: 'id1',
        author: {id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb'},
        body: 'body',
        coverImageUrl: '',
        publishAt: '2022-10-07',
        summary: 'sum',
        tags: [],
        thumbnailUrl: '',
        title: 'title'
      },{
        id: 'i2',
        author: {id: 'author_1', name: 'shimoda', profile: 'prof', thumbnailUrl: 'thumb'},
        body: 'body',
        coverImageUrl: '',
        publishAt: '2022-10-07',
        summary: 'sum',
        tags: [],
        thumbnailUrl: '',
        title: 'title'
      }]
    })
  }

  findByTag(tagId: string, limit?: number, lastEvaluatedKey?: string) {
    const url = StringUtils.format(API.GET_ARTICLES_BY_TAG, {id: tagId});
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<GetArticlesResponse>(url, {params});
  }
}
