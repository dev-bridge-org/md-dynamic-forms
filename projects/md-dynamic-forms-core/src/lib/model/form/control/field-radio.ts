import {FieldSelect, FieldSelectConfig} from './field-select';

export interface FieldRadioConfig extends FieldSelectConfig {
}

export class FieldRadio extends FieldSelect {

  constructor(config: FieldRadioConfig) {
    super(config);
    this.options = config.options;

    this.component = 'radiobutton';
    this.formType = 'control';
  }
}
