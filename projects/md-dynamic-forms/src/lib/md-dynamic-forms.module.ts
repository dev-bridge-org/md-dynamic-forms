import { NgModule } from '@angular/core';
import { MdDynamicFormsComponent } from './md-dynamic-forms.component';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DateComponent} from './components/date/date.component';
import {InputComponent} from './components/input/input.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {SelectComponent} from './components/select/select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {COMPONENT_SET} from './model/component-set';
import {STANDARD_COMPONENT_SET} from './model/standard-component-set';
import { GroupComponent } from './components/group/group.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



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
    TableComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}],
  exports: [MdDynamicFormsComponent, MdDynamicFieldDirective],
})
export class MdDynamicFormsModule { }
