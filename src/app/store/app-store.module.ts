import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducer } from './reducers/meta.reducer';
import { loadingReducer } from './reducers/loading.reducer';

@NgModule({
  imports: [StoreModule.forRoot(loadingReducer, { metaReducers: metaReducer }), EffectsModule.forRoot([])],
})
export class AppStoreModule {}
