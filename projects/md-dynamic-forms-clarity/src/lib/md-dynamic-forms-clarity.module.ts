import { NgModule } from '@angular/core';
import { ClarityInputComponent } from './components/control/clarity-input/clarity-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {CommonModule} from '@angular/common';
import {COMPONENT_SET} from 'md-dynamic-forms-core';
import {STANDARD_COMPONENT_SET} from './model/standard-component-set';
import { ClaritySelectComponent } from './components/control/clarity-select/clarity-select.component';
import { ClarityDatepickerComponent } from './components/control/clarity-datepicker/clarity-datepicker.component';
import { ClarityCheckboxComponent } from './components/control/clarity-checkbox/clarity-checkbox.component';
import { ClarityRangeComponent } from './components/control/clarity-range/clarity-range.component';
import { ClarityToggleComponent } from './components/control/clarity-toggle/clarity-toggle.component';
import { ClarityRadioComponent } from './components/control/clarity-radio/clarity-radio.component';
import {ClarityGroupComponent} from './components/group/clarity-group.component';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';



@NgModule({
  declarations: [
    ClarityInputComponent,
    ClaritySelectComponent,
    ClarityDatepickerComponent,
    ClarityCheckboxComponent,
    ClarityRangeComponent,
    ClarityToggleComponent,
    ClarityRadioComponent,
    ClarityGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    MdDynamicFormsCoreModule
  ],
  providers: [
    {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
  ],
  exports: [
    ClarityInputComponent,
    ClaritySelectComponent,
    ClarityDatepickerComponent,
    ClarityCheckboxComponent,
    ClarityRangeComponent,
    ClarityToggleComponent,
    ClarityRadioComponent,
    ClarityGroupComponent
  ]
})
export class MdDynamicFormsClarityModule { }
