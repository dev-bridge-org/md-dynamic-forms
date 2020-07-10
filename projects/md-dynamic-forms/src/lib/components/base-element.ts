import {FieldConfig} from '../model/field-config.interface';
import {FormGroup} from '@angular/forms';

export class BaseElement {
  field: FieldConfig;
  group: FormGroup;
}
