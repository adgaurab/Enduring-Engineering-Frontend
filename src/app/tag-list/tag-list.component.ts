import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  private sub: any;
  tag: any;
  article_id: any;
  tag_articles: [];

  isShown: boolean = true ;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.tag = params['tag'];
    })
    this.api.tagArticle(this.tag).subscribe((res) => {
      this.isShown = false
      this.tag_articles = res;
    },
      (error) => {
        console.log(error);
      });
  }

}
