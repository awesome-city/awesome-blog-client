import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { adminReducer } from './reducers/admin.reducer';
import { adminFeatureKey } from './admin.state';

@NgModule({
  imports: [StoreModule.forFeature(adminFeatureKey, adminReducer), EffectsModule.forFeature([])],
})
export class AdminStoreModule {}
