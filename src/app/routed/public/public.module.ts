import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PublicStoreModule } from './store/public-store.module';
import { PublicComponent } from './public.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CoverComponent } from './components/cover/cover.component';

@NgModule({
  declarations: [
    ArticlePageComponent,
    TopPageComponent,
    TagPageComponent,
    PublicComponent,
    PublicSidebarComponent,
    PublicHeaderComponent,
    ArticleListComponent,
    CoverComponent,
  ],
  imports: [CommonModule, SharedModule, PublicRoutingModule, PublicStoreModule],
})
export class PublicModule {}
