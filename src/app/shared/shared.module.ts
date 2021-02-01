import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {InputTypeNumberDirective} from './utils/inputTypeNumber';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [InputTypeNumberDirective],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    InputTypeNumberDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
