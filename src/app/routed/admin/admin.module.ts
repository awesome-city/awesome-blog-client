import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminSidebarComponent } from './components/common/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/common/admin-header/admin-header.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ArticlesPageComponent } from './pages/article/articles-page/articles-page.component';
import { ArticlePageComponent } from './pages/article/article-page/article-page.component';
import { BasicSettingPageComponent } from './pages/settings/basic-setting-page/basic-setting-page.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminComponent, AdminHeaderComponent, DashboardPageComponent, ArticlesPageComponent, ArticlePageComponent, BasicSettingPageComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
