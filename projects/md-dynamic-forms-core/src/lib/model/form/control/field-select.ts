import {Observable} from 'rxjs';
import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldSelectConfig extends BaseFieldControlConfig {
  options: (...args) => Observable<any>;
  display?: (...args) => Observable<string>;
}

export class FieldSelect extends BaseFieldControl {
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
