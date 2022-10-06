import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
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
import {catchError, iif, map, mergeMap, of, switchMap, withLatestFrom} from "rxjs";
import {ArticleService} from "../../../../service/rest/article/article.service";
import {select, Store} from '@ngrx/store';
import {loadingEndAction, loadingStartAction} from '../../../../store/actions/loading.action';
import {getArticlesSelector, getCurrentArticleSelector} from '../selectors/article.selector';

@Injectable()
export class ArticleEffect {

  constructor(
    private actions$: Actions<ArticleAction>,
    private articleService: ArticleService,
    private store: Store
  ) {
  }

  loadOne$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticleAction),
    withLatestFrom(this.store.pipe(select(getCurrentArticleSelector))),
    switchMap(([{id}, current]) => {
      if (current?.id === id) {
        return of(loadArticleSuccessAction({result: current}));
      } else {
        const label = `article_load_${id}`;
        this.store.dispatch(loadingStartAction({label}));
        return this.articleService.findById(id).pipe(
          switchMap(result => of(
            loadArticleSuccessAction({result}),
            loadingEndAction({label})
          )),
          catchError(error => of(
            loadArticleFailureAction({error}),
            loadingEndAction({label})
          )),
        );
      }
    })
  ));

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticlesAction),
    withLatestFrom(this.store.pipe(select(getArticlesSelector))),
    switchMap(([action, current]) => {
      if (current.loading) {
        return of(loadArticlesFailureAction({error: 'loading now.'}));
      } else {
        const label = `article_load_all`;
        this.store.dispatch(loadingStartAction({label}));
        return this.articleService.findAll(action.limit).pipe(
          switchMap(result => of(
            loadArticlesSuccessAction({result}),
            loadingEndAction({label})
          )),
          catchError(error => of(
            loadArticlesFailureAction({error}),
            loadingEndAction({label})
          ))
        );
      }
    })
  ));

  loadAllMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMoreArticlesAction),
    withLatestFrom(this.store.pipe(select(getArticlesSelector))),
    switchMap(([{limit, lastEvaluatedKey}, current]) => {
      if (current.loading) {
        return of(loadMoreArticlesFailureAction({error: 'loading now.'}));
      } else {
        const label = `article_load_more_${lastEvaluatedKey}`;
        this.store.dispatch(loadingStartAction({label}));
        return this.articleService.findAll(limit, lastEvaluatedKey).pipe(
          switchMap(result => of(
            loadMoreArticlesSuccessAction({result}),
            loadingEndAction({label})
          )),
          catchError(error => of(
            loadMoreArticlesFailureAction({error}),
            loadingEndAction({label})
          ))
        );
      }
    })
  ));

}
