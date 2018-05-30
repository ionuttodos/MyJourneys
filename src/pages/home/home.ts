import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
import {SetJourneyPage} from "../set-journey/set-journey";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private journey = this.locationTracker.locations;
  constructor(
    public navCtrl: NavController,
    public locationTracker: LocationTrackerProvider
  ) {

  }

  public start() {
    this.locationTracker.startTracking();

  }

  public stop() {
    this.locationTracker.stopTracking();
    this.navCtrl.push(SetJourneyPage);

  }

}
