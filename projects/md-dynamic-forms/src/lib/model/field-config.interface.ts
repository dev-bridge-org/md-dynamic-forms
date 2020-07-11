import {Validator} from './validator.interface';
import {AsyncValidator} from './async-validator.interface';
import {Observable} from 'rxjs';

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: (...args) => Observable<any[]>;
  collections?: any;
  type: string;
  formType: string;
  children: FieldConfig[];
  listItem?: FieldConfig;
  value?: any;
  validations?: Validator[];
  asyncValidations?: AsyncValidator[];
}
