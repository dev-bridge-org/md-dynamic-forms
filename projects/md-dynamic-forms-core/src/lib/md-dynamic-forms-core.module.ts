import { NgModule } from '@angular/core';
import { MdDynamicFormsCoreComponent } from './md-dynamic-forms-core.component';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FieldsOfBlockPipe } from './pipes/fields-of-block.pipe';
import {BaseLayoutComponent} from './components/base-layout.component';
import {BaseElementComponent} from './components/base-element.component';
import {BaseSelectComponent} from './components/base-select.component';



@NgModule({
  declarations: [
    MdDynamicFormsCoreComponent,
    MdDynamicFieldDirective,
    FieldsOfBlockPipe,
    BaseElementComponent,
    BaseSelectComponent,
    BaseLayoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MdDynamicFormsCoreComponent,
    MdDynamicFieldDirective,
    BaseElementComponent,
    BaseLayoutComponent,
    BaseSelectComponent
  ]
})
export class MdDynamicFormsCoreModule { }
