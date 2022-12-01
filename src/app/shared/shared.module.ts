import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SnsIconComponent } from './components/sns-icon/sns-icon.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';

@NgModule({
  declarations: [SnsIconComponent, ArticleViewComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      isolate: false,
    }),
  ],
  exports: [TranslateModule, SnsIconComponent, ArticleViewComponent],
})
export class SharedModule {}
