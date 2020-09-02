import {BaseField, BaseFieldConfig} from '../base-field';
import {Observable, of} from 'rxjs';

export interface FieldSelectConfig extends BaseFieldConfig {
  options: (...args) => Observable<any>;
  display?: (...args) => Observable<string>;
}

export class FieldSelect extends BaseField {
  options: (...args) => Observable<any>;
  display: (...args) => Observable<string>;

  constructor(config: FieldSelectConfig) {
    super(config);
    this.options = config.options;
    this.display = config.display;

    this.formType = 'control';
    this.component = 'select';
  }
}
