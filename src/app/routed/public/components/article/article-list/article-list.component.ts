import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../../../../models/entity/article';
import { Store } from '@ngrx/store';
import { appSelectors } from '../../../../../store/selectors/app.selector';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input()
  articles?: (Article | undefined)[] = [];
  @Output()
  loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

  site$ = this.store.select(appSelectors.getSite);

  constructor(private store: Store) {}
}
