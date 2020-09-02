import {BaseField, BaseFieldConfig} from '../base-field';
import {Observable} from 'rxjs';

export interface FieldRadioConfig extends BaseFieldConfig{
  options: (...args) => Observable<any>;
}

export class FieldRadio extends BaseField {
  options: (...args) => Observable<any>;

  constructor(config: FieldRadioConfig) {
    super(config);
    this.options = config.options;

    this.component = 'radiobutton';
    this.formType = 'control';
  }
}
