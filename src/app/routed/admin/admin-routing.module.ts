import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ArticlesPageComponent } from './pages/article/articles-page/articles-page.component';
import { ArticlePageComponent } from './pages/article/article-page/article-page.component';
import { BasicSettingPageComponent } from './pages/settings/basic-setting-page/basic-setting-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
      {
        path: 'articles',
        children: [
          {
            path: '',
            component: ArticlesPageComponent,
          },
          {
            path: 'draft',
            component: ArticlePageComponent,
          },
          {
            path: ':id',
            component: ArticlePageComponent,
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: 'basic',
            component: BasicSettingPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
