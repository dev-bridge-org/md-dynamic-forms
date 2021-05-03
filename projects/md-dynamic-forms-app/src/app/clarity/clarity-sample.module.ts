import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityComponent} from './clarity.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {SharedFormsModule} from '../shared-forms/shared-forms.module';


@NgModule({
  declarations: [ClarityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ClarityComponent}
    ]),
    ClarityModule,
    SharedFormsModule
  ]
})
export class ClaritySampleModule { }
