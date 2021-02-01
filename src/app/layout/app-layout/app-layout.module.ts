import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLayoutRoutingModule } from "./app-layout-routing.module";
import { AppLayoutComponent } from './app-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AppHeaderComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule
  ]
})
export class AppLayoutModule { }
