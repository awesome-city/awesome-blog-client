import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './service/rest/article/article.service';
import { AppStoreModule } from './store/app-store.module';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
    AppStoreModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ArticleService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
