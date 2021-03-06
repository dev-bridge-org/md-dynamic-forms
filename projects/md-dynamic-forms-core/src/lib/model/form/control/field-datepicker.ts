import {FieldInput, FieldInputConfig} from './field-input';

export interface FieldDatepickerConfig extends FieldInputConfig {
}

export class FieldDatepicker extends FieldInput{
  constructor(config: FieldDatepickerConfig) {
    super(config);

    this.component = 'datepicker';
    this.inputType = 'date';
  }
}
