import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MeRoutingModule } from './me-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, SharedModule, MeRoutingModule],
})
export class MeModule {}
