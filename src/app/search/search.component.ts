import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private sub: any;
  tag: any;
  article_id: any;
  articles: any;
  no_found: any = false ;
  isShown: boolean = true ;

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.tag = params['key'];
      console.log(this.tag)
    })
    this.api.findByPlace(this.tag).subscribe((res) => {
      this.isShown = false
      if(res == 'Data empty'){
        console.log(res)
        this.no_found = true
      }else{
        this.articles = res

      }
    },
      (error) => {
        console.log(error);
      });
  }

}
