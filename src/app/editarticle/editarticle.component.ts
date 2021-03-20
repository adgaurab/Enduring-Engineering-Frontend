import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css'],
})
export class EditarticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  article = [];
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
  image_id: string;
  isShown: boolean = true ;


  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.get('article/' + id + '/').subscribe((res) => {
      this.isShown = false,
      (this.image = res.image_id),
      this.title = res.title,
      this.description = res.description,
      this.place = res.place_name;
      this.introduction = res.introduction;
      this.background = res.background;
      this.purpose_of_paper = res.purpose_of_paper;
      this.methods_of_teaching = res.methods_of_teaching;
      this.discussion = res.discussion;
      this.conclusion = res.conclusion;
      this.language =  res.language;
      this.image_id = res.image_id;

    
    });
  }

  save(): void {
    this.isShown = true
    const article_id = +this.route.snapshot.paramMap.get('id');
    console.log(article_id)
    console.log(this.title)

    const data = {
      title : this.title,
      description : this.description,
      place_name : this.place,
      introduction : this.introduction,
      background : this.background,
      purpose_of_paper : this.purpose_of_paper,
      methods_of_teaching : this.methods_of_teaching,
      discussion : this.discussion,
      conclusion : this.conclusion,
      user_id : 'http://127.0.0.1:8000/users/3/',
      gps: '28.2154,54.25624',
      image_id: this.image_id,
      language: 'jjjjjj'

    }
    this.api.updateArticle(article_id, data).subscribe(
      (response) => {
        this.isShown = false,
        console.log(response)
      },
      (error) => {}
    );

  }
}
