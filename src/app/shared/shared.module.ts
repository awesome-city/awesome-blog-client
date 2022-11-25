import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SnsIconComponent } from './components/sns-icon/sns-icon.component';

@NgModule({
  declarations: [SnsIconComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      isolate: false,
    }),
  ],
  exports: [TranslateModule, SnsIconComponent],
})
export class SharedModule {}
