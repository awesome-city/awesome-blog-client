import { Component, Input } from '@angular/core';
import { Article } from '../../../../../models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent {
  @Input()
  article?: Article;

  constructor() {}
}
