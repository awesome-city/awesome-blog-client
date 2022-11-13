import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent,
  },
  {
    path: 'articles',
    children: [
      {
        path: ':id',
        component: ArticlePageComponent,
      },
    ],
  },
  {
    path: 'tags',
    children: [
      {
        path: ':id',
        component: TagPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
