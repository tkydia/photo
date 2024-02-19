import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MediaCapture,
    File,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
