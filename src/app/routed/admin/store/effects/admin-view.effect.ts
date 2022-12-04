import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AdminViewAction } from '../actions/admin-view.action';
import { of, switchMap } from 'rxjs';
import { AdminApiAction } from '../actions/admin-api.action';

@Injectable()
export class AdminViewEffect {
  constructor(private actions$: Actions, private store: Store) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAction.loadArticles),
      switchMap(() => of(AdminApiAction.loadPublished({ limit: 25 }), AdminApiAction.loadDraft({ limit: 25 })))
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAction.loadArticle),
      switchMap(({ id }) => of(AdminApiAction.loadArticle({ id })))
    )
  );
}
