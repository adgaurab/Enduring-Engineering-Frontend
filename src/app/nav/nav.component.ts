import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  place_name: string; 
  loginForm: FormGroup;
  percent: string;

  constructor(private router: Router, private api: ApiService,  private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      place: '',
    }); 
  }

  get islogin() {
    var token = localStorage.getItem('key');
    if (token == null) {
      return true;
    } else {
      return false;
    }
  }

  get istoken() {
    var token = localStorage.getItem('key');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    window.localStorage.removeItem("key");
    this.router.navigate(['/']);
  }

  refresh(): void {
    const data = this.loginForm.value;
    if(data.place != ""){
      this.router.navigate(['/search/'+data.place]);
    }
  }
}
