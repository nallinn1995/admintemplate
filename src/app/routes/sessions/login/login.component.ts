import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reactiveForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    let username = this.reactiveForm.controls.username.value;
    let password = this.reactiveForm.controls.password.value;
    if(username == "admin" && password == "admin"){
      this.router.navigateByUrl('/dashboard');
    }else{
      this.router.navigateByUrl('/');
    }
  }
}
