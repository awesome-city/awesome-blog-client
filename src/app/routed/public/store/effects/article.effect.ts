import {Injectable} from "@angular/core";
import {Actions, ofType} from "@ngrx/effects";
import {ArticleAction, loadArticles, loadArticlesFailure, loadArticlesSuccess} from "../actions/article.action";
import {catchError, map, of, switchMap} from "rxjs";
import {ArticleService} from "../../../../service/rest/article/article.service";

@Injectable()
export class ArticleEffect {

  constructor(
    private actions$: Actions<ArticleAction>,
    private articleService: ArticleService
  ) {
  }

  loadAll = this.actions$.pipe(
    ofType(loadArticles),
    switchMap(({limit}) => this.articleService.findAll(limit).pipe(
      map(value => loadArticlesSuccess(value)),
      catchError(err => of(loadArticlesFailure()))
    ))
  )

}
