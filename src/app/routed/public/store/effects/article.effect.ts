import {Injectable} from "@angular/core";
import {Actions, ofType} from "@ngrx/effects";
import {
  ArticleAction,
  loadArticleAction,
  loadArticleFailureAction,
  loadArticlesAction,
  loadArticlesFailureAction,
  loadArticlesSuccessAction,
  loadArticleSuccessAction,
  loadMoreArticlesAction,
  loadMoreArticlesFailureAction,
  loadMoreArticlesSuccessAction
} from "../actions/article.action";
import {catchError, map, of, switchMap} from "rxjs";
import {ArticleService} from "../../../../service/rest/article/article.service";
import {resultMemoize} from '@ngrx/store';

@Injectable()
export class ArticleEffect {

  constructor(
    private actions$: Actions<ArticleAction>,
    private articleService: ArticleService
  ) {
  }

  loadOne = this.actions$.pipe(
    ofType(loadArticleAction),
    switchMap(({id}) => this.articleService.findById(id).pipe(
      map(result => loadArticleSuccessAction({result})),
      catchError(error => of(loadArticleFailureAction({error})))
    ))
  );

  loadAll = this.actions$.pipe(
    ofType(loadArticlesAction),
    switchMap(({limit}) => this.articleService.findAll(limit).pipe(
      map(result => loadArticlesSuccessAction({result})),
      catchError(error => of(loadArticlesFailureAction({error})))
    ))
  );

  loadAllMore = this.actions$.pipe(
    ofType(loadMoreArticlesAction),
    switchMap(({limit, lastEvaluatedKey}) => this.articleService.findAll(limit, lastEvaluatedKey).pipe(
      map(result => loadMoreArticlesSuccessAction({result})),
      catchError(error => of(loadMoreArticlesFailureAction({error})))
    ))
  )



}
