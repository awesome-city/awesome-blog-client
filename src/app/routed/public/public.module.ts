import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PublicStoreModule } from './store/public-store.module';
import { PublicComponent } from './public.component';
import { PublicSidebarComponent } from './components/common/public-sidebar/public-sidebar.component';
import { PublicHeaderComponent } from './components/common/public-header/public-header.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { CoverComponent } from './components/common/cover/cover.component';
import { ArticleCardComponent } from './components/article/article-card/article-card.component';
import { ArticleItemComponent } from './components/article/article-item/article-item.component';
import { PublicFooterComponent } from './components/common/public-footer/public-footer.component';

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
    ArticleCardComponent,
    ArticleItemComponent,
    PublicFooterComponent,
  ],
  imports: [CommonModule, SharedModule, PublicRoutingModule, PublicStoreModule],
})
export class PublicModule {}
