import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';



@NgModule({
  declarations: [
    FormWrapperComponent
  ],
  exports: [
    FormWrapperComponent
  ],
  imports: [
    CommonModule,
    MdDynamicFormsCoreModule
  ]
})
export class SharedFormsModule { }
