import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, withLatestFrom} from "rxjs";
import {ArticleService} from "../../../../service/rest/article/article.service";
import {Action, select, Store} from '@ngrx/store';
import {loadingEndAction, loadingStartAction} from '../../../../store/actions/loading.action';
import {getArticlesMapSelector} from '../selectors/article.selector';
import {ArticleAction} from "../actions/article.action";

@Injectable()
export class ArticleEffect {

  constructor(
    private actions$: Actions<Action>,
    private articleService: ArticleService,
    private store: Store
  ) {
  }

  loadOne$ = createEffect(() => this.actions$.pipe(
    ofType(ArticleAction.loadOne),
    withLatestFrom(this.store.pipe(select(getArticlesMapSelector))),
    switchMap(([{id}, map]) => {
      if (map?.has(id)) {
        return of(ArticleAction.loadOneSuccess({}));
      } else {
        const label = `article_load_${id}`;
        this.store.dispatch(loadingStartAction({label}));
        return this.articleService.findById(id).pipe(
          switchMap(result => of(
            ArticleAction.loadOneSuccess({result}),
            loadingEndAction({label})
          )),
          catchError(error => of(
            ArticleAction.loadOneFailure({error}),
            loadingEndAction({label})
          )),
        );
      }
    })
  ));

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(ArticleAction.load),
    switchMap((action) => {
      const label = `article_load_all`;
      this.store.dispatch(loadingStartAction({label}));
      return this.articleService.findAll(action.limit).pipe(
        switchMap(result => of(
          ArticleAction.loadSuccess({result}),
          loadingEndAction({label})
        )),
        catchError(error => of(
          ArticleAction.loadFailure({error}),
          loadingEndAction({label})
        ))
      );
    })
  ));

  loadAllMore$ = createEffect(() => this.actions$.pipe(
    ofType(ArticleAction.loadMore),
    switchMap(({limit, lastEvaluatedKey}) => {
      const label = `article_load_more_${lastEvaluatedKey}`;
      this.store.dispatch(loadingStartAction({label}));
      return this.articleService.findAll(limit, lastEvaluatedKey).pipe(
        switchMap(result => of(
          ArticleAction.loadMoreSuccess({result}),
          loadingEndAction({label})
        )),
        catchError(error => of(
          ArticleAction.loadMoreFailure({error}),
          loadingEndAction({label})
        ))
      );
    })
  ));

}
