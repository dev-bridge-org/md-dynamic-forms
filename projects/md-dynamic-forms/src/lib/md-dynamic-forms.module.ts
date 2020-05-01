import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListComponent} from '@lib/components/list/list.component';
import {GroupComponent} from '@lib/components/group/group.component';
import {COMPONENT_SET} from '@lib/model/component-set';
import {STANDARD_COMPONENT_SET} from '@lib/model/standard-component-set';
import {ButtonComponent} from '@lib/components/button/button.component';
import {InputComponent} from '@lib/components/input/input.component';
import {DateComponent} from '@lib/components/date/date.component';
import {CheckboxComponent} from '@lib/components/checkbox/checkbox.component';
import {RadiobuttonComponent} from '@lib/components/radiobutton/radiobutton.component';
import {SelectComponent} from '@lib/components/select/select.component';
import {MaterialModule} from '@lib/material.module';
import {MdDynamicFieldDirective} from '@lib/md-dynamic-field.directive';
import {MdDynamicFormsComponent} from '@lib/md-dynamic-forms.component';



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
    GroupComponent,
    ListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
  ],
  providers: [{provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}],
  exports: [MdDynamicFormsComponent],
})
export class MdDynamicFormsModule { }
