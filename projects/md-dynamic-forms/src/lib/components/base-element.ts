import {FormGroup} from '@angular/forms';
import {BaseField} from '../model/form/base-field';

export class BaseElement<T extends BaseField> {
  field: T;
  group: FormGroup;
}
