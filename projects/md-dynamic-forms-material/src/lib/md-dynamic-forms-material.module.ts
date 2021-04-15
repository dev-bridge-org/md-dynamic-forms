import { NgModule } from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DatepickerComponent} from './components/datepicker/datepicker.component';
import {InputComponent} from './components/input/input.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {SelectComponent} from './components/select/select.component';
import {GroupComponent} from './components/group/group.component';
import {ListComponent} from './components/list/list.component';
import {TableComponent} from './components/table/table.component';
import {STANDARD_COMPONENT_SET} from './model/standard-component-set';
import {COMPONENT_SET, MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {ToggleComponent} from './components/toggle/toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TextareaComponent } from './components/textarea/textarea.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    GroupComponent,
    ListComponent,
    TableComponent,
    ToggleComponent,
    TextareaComponent
  ],
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MdDynamicFormsCoreModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMomentDateModule,
    MatButtonToggleModule
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    GroupComponent,
    ListComponent,
    TableComponent,
    ToggleComponent,
    TextareaComponent
  ],
  providers: [
    {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
  ]
})
export class MdDynamicFormsMaterialModule { }
