import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { adminReducer } from './reducers/admin.reducer';
import { adminFeatureKey } from './admin.state';
import { AdminViewEffect } from './effects/admin-view.effect';
import { AdminApiEffect } from './effects/admin-api.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature([AdminApiEffect, AdminViewEffect]),
  ],
})
export class AdminStoreModule {}
