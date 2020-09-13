import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map:any;
  article:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.map = L.map('map').setView([-25.045792, 130.737305], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'contributors'
    }).addTo(this.map)

    this.api.get('article/').subscribe(res => {
        res.forEach(element => {
          console.log(element)
          var latton = element.gps
          var latlon_gps = latton.split(',');
          var lat  = latlon_gps[0];
          var lon  = latlon_gps[1];
          var title = element.title
          if(element.status == true){
            var str = "Click for Further Reading"
          }
          if(element.status == false){
            var str = "Click for Request"
          }
         L.marker([lat, lon]).bindPopup(title + '<p><a href="https://wiki-front.web.app/home/'+ element.id + '">'+ str + '</a></p>').addTo(this.map);
        });
    });

  }
}
