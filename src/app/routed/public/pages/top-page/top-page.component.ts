import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getArticlesSelector} from "../../store/selectors/article.selector";
import {State} from "../../../../store/app.state";
import {ArticleAction} from "../../store/actions/article.action";

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  articles$ = this.store.pipe(select(getArticlesSelector));

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ArticleAction.load({limit: 10}))
  }

}
