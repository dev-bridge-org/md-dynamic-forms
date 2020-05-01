import {InputComponent} from '../components/input/input.component';
import {ButtonComponent} from '../components/button/button.component';
import {SelectComponent} from '../components/select/select.component';
import {DateComponent} from '../components/date/date.component';
import {RadiobuttonComponent} from '../components/radiobutton/radiobutton.component';
import {CheckboxComponent} from '../components/checkbox/checkbox.component';
import {ComponentSet} from './component-set';

export const STANDARD_COMPONENT_SET: ComponentSet = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
};
