import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getArticleByIdSelector} from "../../store/selectors/article.selector";
import {State} from "../../../../store/app.state";
import {ArticleAction} from "../../store/actions/article.action";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article$ = this.store.pipe(select(getArticleByIdSelector('id')));

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    console.log('dispatch');
    this.store.dispatch(ArticleAction.loadOne({id: 'id'}));
  }

}
