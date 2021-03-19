import {Observable} from 'rxjs';
import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';
import {Option} from '../../common/option';

export interface FieldSelectConfig extends BaseFieldControlConfig {
  options: (...args) => Observable<Option[]>;
}

export class FieldSelect extends BaseFieldControl {
  options: (...args) => Observable<Option[]>;

  constructor(config: FieldSelectConfig) {
    super(config);
    this.options = config.options;

    this.formType = 'control';
    this.component = 'select';
  }
}
