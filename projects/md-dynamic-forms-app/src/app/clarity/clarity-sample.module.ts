import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityComponent} from './clarity.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {SharedFormsModule} from '../shared-forms/shared-forms.module';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsClarityModule} from 'md-dynamic-forms-clarity';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ClarityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ClarityComponent}
    ]),
    ReactiveFormsModule,
    ClarityModule,
    MdDynamicFormsCoreModule,
    MdDynamicFormsClarityModule,
    SharedFormsModule
  ]
})
export class ClaritySampleModule { }
