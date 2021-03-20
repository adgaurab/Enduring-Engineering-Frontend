import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  id: any;
  private sub: any;
  image: any;
  myposts: [];
  isShown: boolean = true ;


  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    var token = localStorage.getItem('key');
    this.api.getUserInfo(token).subscribe(
      (response) => {
        console.log(response.mypost);
        this.isShown = false
        this.myposts = response.mypost;

      },
      (error) => {
        console.log(error);
      }
    );

  }

  delete(article): void {
    console.log(article.id)
    this.api.deletepost(article.id).subscribe(
      (res) => {
        console.log(res)
      }
    );
  }

}
