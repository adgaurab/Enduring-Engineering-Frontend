import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any;
  private sub: any;
  title: any
  constructor(private api: ApiService,     private router: Router, private route: ActivatedRoute    ) {}

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 

   });
    
    this.api.get('article/'+ this.id + '/').subscribe((res) => {
        this.title = res.title
    });
  }
}
