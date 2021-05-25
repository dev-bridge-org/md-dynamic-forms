import {ClarityInputComponent} from '../components/control/clarity-input/clarity-input.component';
import {ClaritySelectComponent} from '../components/control/clarity-select/clarity-select.component';
import {ClarityToggleComponent} from '../components/control/clarity-toggle/clarity-toggle.component';
import {ClarityRangeComponent} from '../components/control/clarity-range/clarity-range.component';
import {ClarityRadioComponent} from '../components/control/clarity-radio/clarity-radio.component';
import {ClarityDatepickerComponent} from '../components/control/clarity-datepicker/clarity-datepicker.component';
import {ClarityCheckboxComponent} from '../components/control/clarity-checkbox/clarity-checkbox.component';
import {ClarityGroupComponent} from '../components/group/clarity-group.component';
import {ClarityTableComponent} from '../components/array/clarity-table/clarity-table.component';
import {ClarityButtonComponent} from '../components/control/clarity-button/clarity-button.component';

export const STANDARD_COMPONENT_SET = {
  input: ClarityInputComponent,
  select: ClaritySelectComponent,
  switch: ClarityToggleComponent,
  slider: ClarityRangeComponent,
  radiobutton: ClarityRadioComponent,
  datepicker: ClarityDatepickerComponent,
  checkbox: ClarityCheckboxComponent,
  group: ClarityGroupComponent,
  table: ClarityTableComponent,
  button: ClarityButtonComponent
};
