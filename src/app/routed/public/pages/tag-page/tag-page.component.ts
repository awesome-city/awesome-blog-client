import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ArticleSelector } from '../../store/selectors/articleSelector';
import { filter, fromEvent, Observable, Subscription, tap, throttleTime, withLatestFrom } from 'rxjs';
import { State } from '../../../../store/app.state';
import { ArticleAction } from '../../store/actions/article.action';
import { Article } from '../../../../models/entity/article';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss'],
})
export class TagPageComponent implements OnInit, OnDestroy {
  tagId?: string;
  articles$?: Observable<(Article | undefined)[] | undefined>;
  sub$ = new Subscription();

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagId = this.route.snapshot.params['id'];
    console.log(`this.tagId = ${this.tagId}`);
    if (this.tagId) {
      this.articles$ = this.store.pipe(select(ArticleSelector.getArticlesByTag(this.tagId)));
      this.store.dispatch(ArticleAction.loadByTag({ tagId: this.tagId, limit: 10 }));

      let processedLastEvaluatedKey: string | undefined;
      this.sub$.add(
        fromEvent(window, 'scroll')
          .pipe(
            throttleTime(100),
            withLatestFrom(this.store.select(ArticleSelector.getArticlesByTagLastEvaluatedKey(this.tagId))),
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
          .subscribe((value) => {
            if (this.tagId) {
              this.store.dispatch(ArticleAction.loadMoreByTag({ tagId: this.tagId, limit: 10 }));
            }
          })
      );
    }
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
