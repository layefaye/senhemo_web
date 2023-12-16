import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapType = "";
  ngOnInit(): void {
    if (sessionStorage.getItem("mapType") != null) {
        this.mapType = sessionStorage.getItem("mapType") ?? '';
    }
    
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    

    });
    this.map = Leaflet.map('leaflet-map', this.options)
    
 
    this.initMarkers()
  }

  map!: Leaflet.Map;
  
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 6,
    center: { lat: 14.499454, lng: -14.445561 }
  }

  /**
   * les marqueur qui vont correspondre a des cordonnee geographique en loccurence latitude et longitudes
   */
  initMarkers() {
    if (this.mapType === 'bank') {
      this.data.forEach((element: any) => {
        const marker = this.generateMarker(
          {
            position: { lat: +element.latitude, lng: +element.longitude },
            draggable: true
          }
          , element.id);
          marker.addTo(this.map).bindPopup(`<div class='text-center fw-bold text-uppercase'>  ${element.status ? `<div class='spinner-grow text-success' role="status"></div>` :`<div class='spinner-grow text-danger' role="status"></div>`}<br/> <img class='img-fluid img-responsive' style="width: 5em"  src='assets/bank.png'> <br/> ${element.name} </div> `);
        
          this.map.panTo({lat: element.latitude, lng: element.longitude});
          this.markers.push(marker)
      });
    }else{
      this.data.forEach((element: any) => {
        const marker = this.generateMarker(
          {
            position: { lat: +element.latitude, lng: +element.longitude },
            draggable: true
          }
          , element.id);
          if (element.sex === "MAN") {
            marker.addTo(this.map).bindPopup(`<div class='text-center fw-bold text-uppercase'>  ${element.status ? `<div class='spinner-grow text-success' role="status"></div>` :`<div class='spinner-grow text-danger' role="status"></div>`}<br/> <img class='img-fluid img-responsive' style="width: 5em"  src='assets/user.png'> <br/> ${element.firstName}  ${element.lastName}</div> `);
          } else {
            marker.addTo(this.map).bindPopup(`<div class='text-center fw-bold text-uppercase'>  ${element.status ? `<div class='spinner-grow text-success' role="status"></div>` :`<div class='spinner-grow text-danger' role="status"></div>`}<br/> <img class='img-fluid img-responsive' style="width: 5em"  src='assets/user_f.png'> <br/> ${element.firstName}  ${element.lastName}</div> `);
          }
          this.map.panTo({lat: element.latitude, lng: element.longitude});
          this.markers.push(marker)
      });
    }
    
    
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
  }

  markerClicked($event: any, index: number) {
  }

  markerDragEnd($event: any, index: number) {
  }



  constructor(private router: Router, private dialog: MatDialog,
    public dialogRef: MatDialogRef<MapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
