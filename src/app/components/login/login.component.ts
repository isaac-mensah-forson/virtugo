import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private authService:AuthService,private router:Router) { }

  get loginFormControls(): any { return this.loginForm.controls }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value)
    this.router.navigate(['/summary'])
    // this.authService.login(this.loginForm.value).subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }
}
