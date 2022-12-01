import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent {
  @Input()
  article?: Article;
}
