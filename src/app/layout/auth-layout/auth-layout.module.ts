import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './app-layout-routing.module';

@NgModule({
  declarations: [AuthFooterComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule
  ]
})
export class AuthLayoutModule { }
