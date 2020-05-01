import { NgModule } from '@angular/core';
import { MdDynamicFormsComponent } from './md-dynamic-forms.component';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DateComponent} from './components/date/date.component';
import {InputComponent} from './components/input/input.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {SelectComponent} from './components/select/select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';



@NgModule({
  declarations: [
    MdDynamicFormsComponent,
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    MdDynamicFieldDirective,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [MdDynamicFormsComponent],
})
export class MdDynamicFormsModule { }
