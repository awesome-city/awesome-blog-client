import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducer } from './reducers/meta.reducer';
import { appReducer } from './reducers/app.reducer';
import { appFeatureKey } from './app.state';

@NgModule({
  imports: [
    StoreModule.forFeature(appFeatureKey, appReducer, { metaReducers: metaReducer }),
    EffectsModule.forFeature([]),
  ],
})
export class AppStoreModule {}
