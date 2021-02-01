import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
