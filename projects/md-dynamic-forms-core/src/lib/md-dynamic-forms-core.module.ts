import { NgModule } from '@angular/core';
import { MdDynamicFormsCoreComponent } from './md-dynamic-forms-core.component';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FieldsOfBlockPipe } from './pipes/fields-of-block.pipe';



@NgModule({
  declarations: [
    MdDynamicFormsCoreComponent,
    MdDynamicFieldDirective,
    FieldsOfBlockPipe
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
