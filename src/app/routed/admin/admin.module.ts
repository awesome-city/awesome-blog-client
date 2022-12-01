import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminSidebarComponent } from './components/common/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/common/admin-header/admin-header.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminComponent, AdminHeaderComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
