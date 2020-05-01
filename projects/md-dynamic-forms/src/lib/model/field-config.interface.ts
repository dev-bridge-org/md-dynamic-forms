import {Validator} from './validator.interface';

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  formType: string;
  children: FieldConfig[];
  listItem?: FieldConfig;
  value?: any;
  validations?: Validator[];
}
