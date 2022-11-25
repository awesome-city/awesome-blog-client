import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
