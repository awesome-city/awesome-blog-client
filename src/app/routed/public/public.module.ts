import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { TopComponent } from './pages/top/top.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';


@NgModule({
  declarations: [
    TopComponent,
    ArticleComponent,
    ArticlePageComponent,
    TopPageComponent,
    TagPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
