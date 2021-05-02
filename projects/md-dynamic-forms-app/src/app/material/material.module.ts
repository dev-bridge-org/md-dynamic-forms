import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MaterialComponent } from './material.component';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsMaterialModule} from 'md-dynamic-forms-material';
import {SharedFormsModule} from '../shared-forms/shared-forms.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MaterialComponent}
    ]),
    MdDynamicFormsCoreModule,
    MdDynamicFormsMaterialModule,
    SharedFormsModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
