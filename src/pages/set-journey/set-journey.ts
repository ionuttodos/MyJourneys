import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
import { AgmCoreModule } from '@agm/core';
import {NgForm} from "@angular/forms";
import {GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
  PolylineOptions,
  Polyline,ILatLng} from "@ionic-native/google-maps";

@Component({
  selector: 'page-set-journey',
  templateUrl: 'set-journey.html',
})
export class SetJourneyPage {
  map: GoogleMap;
  private journey = this.locationTracker.locations;
  private to = "aLocation"
  constructor(public navCtrl: NavController, public navParams: NavParams,public locationTracker: LocationTrackerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetJourneyPage');
    this.addAPolyline();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.to)
    form.reset();
  }

  public addAPolyline() {

    var mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.journey[0].latitude,
          lng: this.journey[0].longitude,
        },
        zoom: 16,
        tilt: 0
      }};


    this.map= GoogleMaps.create('map_canvas');
    var coordinates : ILatLng []=[];
    for (var i = 0, len = this.journey.length; i < len; i++) {
      var point: ILatLng = {lat: this.journey[i].latitude, lng: this.journey[i].longitude}

      coordinates.push(point);
    }
    console.log(coordinates)

    /*     var polylineOptions: PolylineOptions = {
           points: this.coordinates,
           geodesic: true,
           color: '#FF0000',
           width: 10,
           visible: true
         };
   */
    this.map.addPolyline({
      points: coordinates,
      geodesic: true,
      color: '#FF0000',
      width: 10,
      visible: true
    }).then((polyline: Polyline) => {

    });

  }

}
