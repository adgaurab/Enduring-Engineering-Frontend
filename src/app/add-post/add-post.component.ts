import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Article } from '../module/article';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPOSTComponent implements OnInit {
  addPizza: FormGroup;
  description: string;
  title: string;
  language: string;
  place_name: string;
  gps: string;
  status: boolean;
  image: File;
  resImageURL: string;
  itemImageUrl: string;
  introduction: string;
  background: string;
  purpose_of_paper: string;
  methods_of_teaching: string;
  discussion: string;
  conclusion: string;
  tag: string;

  isShown: boolean = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    var token = localStorage.getItem('key');
    this.api.getUserInfo(token).subscribe(
      (response) => {
        localStorage.setItem('user_id', response.user_info[0].id);
      },
      (error) => {
        console.log(error);
      }
    );

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.gps = latitude+','+longitude
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  onImageChange(event: any) {
    this.image = event.target.files[0];
    const file = this.image;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', 'ccba9a4a279ed7359cbb9a66bafd7afd');

    this.api.uploadImage(formData).subscribe(
      (response) => {
        this.resImageURL = response.data.display_url;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveTutorial(): void {
    this.isShown = true;

    const a = this.resImageURL;
    var user_id = localStorage.getItem('user_id');

    const data = {
      user_id: 'https://enduring-engineering.herokuapp.com/users/' + user_id + '/',
      title: this.title,
      description: this.description,
      place_name: this.place_name.toLowerCase( ),
      image_id: this.resImageURL,
      language: this.language,
      gps: this.gps,
      status: this.status,
      introduction: this.introduction,
      background: this.background,
      purpose_of_paper: this.purpose_of_paper,
      methods_of_teaching: this.methods_of_teaching,
      discussion: this.discussion,
      conclusion: this.conclusion,
      tags: this.tag,
    };
    console.log(data)
    this.api.createArticle(data).subscribe(
      (response) => {
        this.resImageURL = response;
        this.router.navigate(['/']);
      },
      (error) => { }
    );
  }
}
