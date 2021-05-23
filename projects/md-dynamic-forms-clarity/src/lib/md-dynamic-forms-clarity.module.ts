import { NgModule } from '@angular/core';
import { ClarityInputComponent } from './components/control/clarity-input/clarity-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {CommonModule} from '@angular/common';
import {COMPONENT_SET} from 'md-dynamic-forms-core';
import {STANDARD_COMPONENT_SET} from './model/standard-component-set';



@NgModule({
  declarations: [
    ClarityInputComponent
  ],
  imports: [
    ReactiveFormsModule,
    ClarityModule,
    CommonModule
  ],
  providers: [
    {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
  ],
  exports: [
    ClarityInputComponent
  ]
})
export class MdDynamicFormsClarityModule { }
