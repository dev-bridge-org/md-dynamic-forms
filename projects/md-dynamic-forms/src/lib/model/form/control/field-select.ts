import {BaseField, BaseFieldConfig} from '../base-field';
import {Observable} from 'rxjs';

export interface FieldSelectConfig extends BaseFieldConfig {
  options: (...args) => Observable<any>;
}

export class FieldSelect extends BaseField {
  options: (...args) => Observable<any>;

  constructor(config: FieldSelectConfig) {
    super(config);
    this.options = config.options;

    this.formType = 'control';
    this.component = 'select';
  }
}
