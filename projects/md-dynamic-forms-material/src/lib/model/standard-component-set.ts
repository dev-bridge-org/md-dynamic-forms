import {InputComponent} from '../components/input/input.component';
import {ButtonComponent} from '../components/button/button.component';
import {SelectComponent} from '../components/select/select.component';
import {DatepickerComponent} from '../components/datepicker/datepicker.component';
import {RadiobuttonComponent} from '../components/radiobutton/radiobutton.component';
import {CheckboxComponent} from '../components/checkbox/checkbox.component';
import {GroupComponent} from '../components/group/group.component';
import {ListComponent} from '../components/list/list.component';
import {TableComponent} from '../components/table/table.component';
import {ToggleComponent} from '../components/toggle/toggle.component';

export const STANDARD_COMPONENT_SET = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  toggle: ToggleComponent,
  datepicker: DatepickerComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  group: GroupComponent,
  list: ListComponent,
  table: TableComponent,
};
