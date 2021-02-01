import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private auth: AuthenticationService, private fb: FormBuilder) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  signIn(){
    this.auth.signInWIthEmailAndPassword(this.email.value, this.password.value).then(res => {
      console.log(res);
  
    })
    .catch(err => {
      console.log(err);
    })
  }

  get email(){
    return this.signInForm.controls.email as FormControl
  }

  get password(){
    return this.signInForm.controls.password as FormControl

  }
}
