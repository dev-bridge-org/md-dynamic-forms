import {BaseField, BaseFieldConfig} from '../base-field';
import {Observable} from 'rxjs';
import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldRadioConfig extends BaseFieldControlConfig {
  options: (...args) => Observable<any>;
}

export class FieldRadio extends BaseFieldControl {
  options: (...args) => Observable<any>;

  constructor(config: FieldRadioConfig) {
    super(config);
    this.options = config.options;

    this.component = 'radiobutton';
    this.formType = 'control';
  }
}
