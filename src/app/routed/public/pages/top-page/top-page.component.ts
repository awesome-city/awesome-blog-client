import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../../../store/app.state';
import { ArticleAction } from '../../store/actions/article.action';
import { filter, fromEvent, map, Subscription, tap, throttleTime, withLatestFrom } from 'rxjs';
import { ArticleSelector } from '../../store/selectors/articleSelector';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit, OnDestroy {
  articles$ = this.store.pipe(select(ArticleSelector.getArticles));
  sub$ = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ArticleAction.load({ limit: 10 }));

    let processedLastEvaluatedKey: string | undefined;
    this.sub$.add(
      fromEvent(window, 'scroll')
        .pipe(
          map((_) => 0),
          throttleTime(100),
          withLatestFrom(this.store.select(ArticleSelector.getArticlesLastEvaluatedKey)),
          filter(([e, lastEvaluatedKey]) => !!lastEvaluatedKey),
          filter(([_, key]) => key !== processedLastEvaluatedKey),
          filter(([_, ignored]) => {
            const bodyHeight = document.body.clientHeight;
            const windowHeight = window.innerHeight;
            const bottomPoint = bodyHeight - windowHeight;
            const currentPos = window.scrollY;
            return bottomPoint <= currentPos + 100;
          }),
          tap(([_, key]) => (processedLastEvaluatedKey = key))
        )
        .subscribe((value) => this.store.dispatch(ArticleAction.loadMore({ limit: 10 })))
    );
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
