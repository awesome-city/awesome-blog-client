import { Component, Input } from '@angular/core';
import { Article } from '../../../../../models/article';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent {
  @Input()
  article?: Article;
}
