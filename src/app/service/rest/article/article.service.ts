import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Paging} from "../../../models/paging";
import {Article} from "../../../models/article";
import {StringUtils} from "../../../utils/string.utils";
import {API} from "../api";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  findAll(limit?: number, lastEvaluatedKey?: string) {
    const url = API.GET_ARTICLES;
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<Paging<Article>>(url, {params});
  }

  findByTag(tagId: string, limit?: number, lastEvaluatedKey?: string) {
    const url = StringUtils.format(API.GET_ARTICLES_BY_TAG, {tag: tagId});
    let params = new HttpParams();
    params = limit ? params.set('limit', `${limit}`) : params;
    params = limit ? params.set('lastEvaluatedKey', `${lastEvaluatedKey}`) : params;
    return this.http.get<Paging<Article>>(url, {params});
  }
}
