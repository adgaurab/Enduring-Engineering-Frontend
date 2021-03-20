import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    const data = this.loginForm.value;
    this.api.createAccount(data).subscribe(
      (response) => {
        localStorage.setItem('key', response.key);
        this.submitted = true;
        localStorage.setItem('user_mail', data.email);
        this.router.navigate(['/addPost']);
      },
      (error) => {
        alert('Invalid Login');
      }
    );
  }
}
