import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {loadArticleAction} from "../../store/actions/article.action";
import {getCurrentArticleSelector} from "../../store/selectors/article.selector";
import {State} from "../../../../store/app.state";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article$ = this.store.pipe(select(getCurrentArticleSelector));

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    console.log('dispatch');
    this.store.dispatch(loadArticleAction({id: 'some_id'}));
  }

}
