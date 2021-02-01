import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from "src/app/shared/shared.module";
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
