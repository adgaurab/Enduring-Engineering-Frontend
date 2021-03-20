import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map:any;
  article:any;
  constructor(private api: ApiService,  private router: Router ) { }

  ngOnInit() {
    this.map = L.map('map').fitWorld().setView([-25.045792, 130.737305], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'contributors'
    }).addTo(this.map)

    this.api.get('article/').subscribe(res => {
        res.forEach(element => {
          var latton = element.gps
          var latlon_gps = latton.split(',');
          var lat  = latlon_gps[0];
          var lon  = latlon_gps[1];
          var title = element.title
          var str = "Click for Further Reading"
          var link  = '<p><a href="https://wiki-front-test.web.app/post/'+ element.id + '">'+ str + '</a></p>'
          if(lon != undefined){
            L.marker([lat, lon]).bindPopup(title + '<br><img src=' + element.image_id + '  style="width: 150px; height: 75px;">'
            + link).addTo(this.map);
          }else{
            console.log(title+' This atricle has invalid GPS')
          }
        });
    });

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(this.map);
    }
  
    this.map.on('dblclick', onMapClick);

  }
}
