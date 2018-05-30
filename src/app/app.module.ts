import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AgmCoreModule} from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";
import { Geolocation } from '@ionic-native/geolocation';
import {SetJourneyPage} from "../pages/set-journey/set-journey";
import {ViewJourneyPage} from "../pages/view-journey/view-journey";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetJourneyPage,
    ViewJourneyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNjh23MrHoFt5uyFBMr2N8uEXg9KOpRiQ'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetJourneyPage,
    ViewJourneyPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation
  ]
})
export class AppModule {}
