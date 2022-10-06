import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {featureName} from './public.state';
import {articleReducer} from './reducers/article.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ArticleEffect} from './effects/article.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, [articleReducer]),
    EffectsModule.forFeature([ArticleEffect])
  ]
})
export class PublicStoreModule {
}
