import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Paging} from "../../../models/paging";
import {Article} from "../../../models/article";
import {StringUtils} from "../../../utils/string.utils";
import {API} from "../api";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  findById(articleId: string): Observable<Article> {
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

  findAll(limit?: number, lastEvaluatedKey?: string) {
    const url = API.GET_ARTICLES;
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<Paging<Article>>(url, {params});
  }

  findByTag(tagId: string, limit?: number, lastEvaluatedKey?: string) {
    const url = StringUtils.format(API.GET_ARTICLES_BY_TAG, {id: tagId});
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<Paging<Article>>(url, {params});
  }
}
