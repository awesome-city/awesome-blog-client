import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureName } from './public.state';
import { publicReducer } from './reducers/public.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect } from './effects/article.effect';

@NgModule({
  imports: [StoreModule.forFeature(featureName, publicReducer), EffectsModule.forFeature([ArticleEffect])],
})
export class PublicStoreModule {}
