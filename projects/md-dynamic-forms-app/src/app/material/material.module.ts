import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MaterialComponent } from './material.component';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsMaterialModule} from 'md-dynamic-forms-material';



@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MaterialComponent}
    ]),
    MdDynamicFormsCoreModule,
    MdDynamicFormsMaterialModule
  ]
})
export class MaterialModule { }
