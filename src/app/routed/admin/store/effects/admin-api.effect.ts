import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../../../../service/rest/article/article.service';
import { Store } from '@ngrx/store';
import { catchError, distinctUntilChanged, of, switchMap, withLatestFrom } from 'rxjs';
import { loadingEndAction, loadingStartAction } from '../../../../store/actions/app-view.action';
import { AdminApiAction } from '../actions/admin-api.action';
import { AdminSelectors } from '../selectors/admin.selector';

@Injectable()
export class AdminApiEffect {
  constructor(private actions$: Actions, private articleService: ArticleService, private store: Store) {}

  loadPublishedArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.loadPublished),
      withLatestFrom(this.store.select(AdminSelectors.getPublishedArticles)),
      switchMap(([{ limit, reload }, _]) => {
        const label = `admin_published_articles_load`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll({ limit, status: 'published' }).pipe(
          switchMap((result) => of(AdminApiAction.loadPublishedSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.loadPublishedFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );

  loadPublishedArticlesMore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.loadPublishedMore),
      withLatestFrom(this.store.select(AdminSelectors.getPublishedArticlesLastEvaluatedKey)),
      distinctUntilChanged((previous, current) => previous[1] !== current[1]),
      switchMap(([{ limit }, lastEvaluatedKey]) => {
        const label = `admin_published_articles_load_more_${lastEvaluatedKey}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll({ limit, lastEvaluatedKey, status: 'published' }).pipe(
          switchMap((result) => of(AdminApiAction.loadPublishedMoreSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.loadPublishedMoreFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );

  loadDraftArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.loadDraft),
      withLatestFrom(this.store.select(AdminSelectors.getDraftArticles)),
      switchMap(([{ limit, reload }, _]) => {
        const label = `admin_draft_articles_load`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll({ limit, status: 'draft' }).pipe(
          switchMap((result) => of(AdminApiAction.loadDraftSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.loadDraftFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );

  loadDraftArticlesMore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.loadDraftMore),
      withLatestFrom(this.store.select(AdminSelectors.getDraftArticlesLastEvaluatedKey)),
      distinctUntilChanged((previous, current) => previous[1] !== current[1]),
      switchMap(([{ limit }, lastEvaluatedKey]) => {
        const label = `admin_draft_articles_load_more_${lastEvaluatedKey}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findAll({ limit, lastEvaluatedKey, status: 'draft' }).pipe(
          switchMap((result) => of(AdminApiAction.loadDraftMoreSuccess({ result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.loadDraftMoreFailure({ error }), loadingEndAction({ label })))
        );
      })
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.loadArticle),
      switchMap(({ id }) => {
        const label = `admin_article_load_${id}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.findById(id).pipe(
          switchMap((result) => of(AdminApiAction.loadArticleSuccess({ id, result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.loadArticleFailure({ id, error }), loadingEndAction({ label })))
        );
      })
    )
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.createArticle),
      switchMap(({ article }) => {
        const label = `admin_article_create_${article.id}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.create(article).pipe(
          switchMap((result) =>
            of(AdminApiAction.createArticleSuccess({ id: article.id, result }), loadingEndAction({ label }))
          ),
          catchError((error) =>
            of(AdminApiAction.createArticleFailure({ id: article.id, error }), loadingEndAction({ label }))
          )
        );
      })
    )
  );

  saveArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.saveArticle),
      switchMap(({ article }) => {
        const label = `admin_article_save_${article.id}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.save(article).pipe(
          switchMap((result) =>
            of(AdminApiAction.saveArticleSuccess({ id: article.id, result }), loadingEndAction({ label }))
          ),
          catchError((error) =>
            of(AdminApiAction.saveArticleFailure({ id: article.id, error }), loadingEndAction({ label }))
          )
        );
      })
    )
  );

  publishArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.publishArticle),
      switchMap(({ id }) => {
        const label = `admin_article_publish_${id}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.publish(id).pipe(
          switchMap((result) => of(AdminApiAction.publishArticleSuccess({ id, result }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.publishArticleFailure({ id, error }), loadingEndAction({ label })))
        );
      })
    )
  );

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminApiAction.deleteArticle),
      switchMap(({ id }) => {
        const label = `admin_article_delete_${id}`;
        this.store.dispatch(loadingStartAction({ label }));
        return this.articleService.delete(id).pipe(
          switchMap((result) => of(AdminApiAction.deleteArticleSuccess({ id }), loadingEndAction({ label }))),
          catchError((error) => of(AdminApiAction.deleteArticleFailure({ id, error }), loadingEndAction({ label })))
        );
      })
    )
  );
}
