import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../../../store/app.state';
import { ArticleAction } from '../../store/actions/article.action';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, tap } from 'rxjs';
import { Article } from '../../../../models/article';
import { ArticleSelector } from '../../store/selectors/articleSelector';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  article$?: Observable<Article | undefined> = undefined;

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.params
        .pipe(
          map((s) => s['id']),
          tap(console.log)
        )
        .subscribe((id) => {
          this.article$ = this.store.pipe(select(ArticleSelector.getArticleById(id)));
          this.store.dispatch(ArticleAction.loadOne({ id: id }));
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
