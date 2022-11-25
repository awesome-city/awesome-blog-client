import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, filter, of, switchMap, withLatestFrom } from 'rxjs';
import { ArticleService } from '../../../../service/rest/article/article.service';
import { select, Store } from '@ngrx/store';
import { loadingEndAction, loadingStartAction } from '../../../../store/actions/app-view.action';
import { ArticleAction } from '../actions/article.action';
import { ArticleSelector } from '../selectors/articleSelector';

@Injectable()
export class ArticleEffect {
  constructor(private actions$: Actions, private articleService: ArticleService, private store: Store) {}

  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleAction.loadOne),
      withLatestFrom(this.store.pipe(select(ArticleSelector.getArticleMap))),
      switchMap(([{ id }, map]) => {
        if (map?.has(id)) {
          return of(ArticleAction.loadOneSuccess({}));
        } else {
          const label = `article_load_${id}`;
          this.store.dispatch(loadingStartAction({ label }));
          return this.articleService.findById(id).pipe(
            switchMap((result) => of(ArticleAction.loadOneSuccess({ result }), loadingEndAction({ label }))),
            catchError((error) => of(ArticleAction.loadOneFailure({ error }), loadingEndAction({ label })))
          );
        }
      })
    )
  );

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleAction.load),
      withLatestFrom(this.store.pipe(select(ArticleSelector.getArticles))),
      filter(([action, articles]) => !!action.reload || (!!articles && articles.length === 0)),
      switchMap(([action, articles]) => {
        const label = `article_load_all`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll(action.limit).pipe(
          switchMap((result) => of(ArticleAction.loadSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(ArticleAction.loadFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );

  loadAllMore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleAction.loadMore),
      withLatestFrom(this.store.select(ArticleSelector.getArticlesLastEvaluatedKey)),
      // if lastEvaluatedKey is same value, stop stream
      distinctUntilChanged((previous, current) => previous[1] !== current[1]),
      switchMap(([{ limit }, lastEvaluatedKey]) => {
        const label = `article_load_more_${lastEvaluatedKey}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll(limit, lastEvaluatedKey).pipe(
          switchMap((result) => of(ArticleAction.loadMoreSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(ArticleAction.loadMoreFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );
}
