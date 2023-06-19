import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  passwordRecoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.authService.recoverPassword(this.passwordRecoveryForm.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

}
