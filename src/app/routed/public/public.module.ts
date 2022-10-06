import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {ArticlePageComponent} from './pages/article-page/article-page.component';
import {TopPageComponent} from './pages/top-page/top-page.component';
import {TagPageComponent} from './pages/tag-page/tag-page.component';
import {SharedModule} from "../../shared/shared.module";
import {PublicStoreModule} from './store/public-store.module';


@NgModule({
  declarations: [
    ArticlePageComponent,
    TopPageComponent,
    TagPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    PublicStoreModule
  ]
})
export class PublicModule {
}
