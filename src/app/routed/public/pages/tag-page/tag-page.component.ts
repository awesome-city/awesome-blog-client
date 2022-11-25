import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ArticleSelector } from '../../store/selectors/articleSelector';
import { Subscription } from 'rxjs';
import { State } from '../../../../store/app.state';
import { ArticleAction } from '../../store/actions/article.action';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss'],
})
export class TagPageComponent implements OnInit, OnDestroy {
  tagId?: string;
  articles$ = this.store.pipe(select(ArticleSelector.getArticles));
  sub$ = new Subscription();

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagId = this.route.snapshot.params['id'];
    if (this.tagId) {
      this.store.dispatch(ArticleAction.loadByTag({ tagId: this.tagId, limit: 10 }));
    }
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
