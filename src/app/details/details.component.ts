import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any;
  private sub: any;
  image: any;
  title: any;
  description: any;
  short_dis: string;
  place: any;
  language: any;
  author: string;
  mail: string;
  full_name: string;
  introduction: string;
  background: string;
  purpose_of_paper: string;
  methods_of_teaching: string;
  discussion: string;
  conclusion: string;
  isShown: boolean = true ;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.api.get('article/' + this.id + '/').subscribe((res) => {
      this.isShown = false,
      (this.image = res.image_id),
        this.title = res.title,
        this.description = res.description,
        this.short_dis = this.description.split('.', 1).toString()
        this.place = res.place_name;
      this.author = res.user_id;
      this.introduction = res.introduction;
      this.background = res.background;
      this.purpose_of_paper = res.purpose_of_paper;
      this.methods_of_teaching = res.methods_of_teaching;
      this.discussion = res.discussion;
      this.conclusion = res.conclusion;
      localStorage.setItem('status', res.status);

      axios.get(this.author).then(function (response) {
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.first_name);
        localStorage.setItem('last_name', response.data.last_name);
      });

      this.mail = localStorage.getItem('email');
      this.full_name = localStorage.getItem('name') + ' ' + localStorage.getItem('last_name');
    });
  }

  get istoken() {
    var status = localStorage.getItem('status');
    if (status == 'true') {
      return false;
    } else {
      return true;
    }
  }

  request(): void{
    alert('Working In Progress')
  }
}
