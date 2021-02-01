import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
