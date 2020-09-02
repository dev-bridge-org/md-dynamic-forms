import { NgModule } from '@angular/core';
import { MdDynamicFormsCoreComponent } from './md-dynamic-forms-core.component';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    MdDynamicFormsCoreComponent,
    MdDynamicFieldDirective
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MdDynamicFormsCoreComponent,
    MdDynamicFieldDirective
  ]
})
export class MdDynamicFormsCoreModule { }
