import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  submitted = false;
  constructor( private api: ApiService, private router: Router) {}


  onSubmit(form: NgForm) {
      var data = form.value ;
      this.api.createUser(data)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/']);

        },
        error => {
          console.log(error);
        });
  }
}
