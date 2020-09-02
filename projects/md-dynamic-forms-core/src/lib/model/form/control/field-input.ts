import {BaseField, BaseFieldConfig} from '../base-field';

export interface FieldInputConfig extends BaseFieldConfig{
  inputType: string;
}

export class FieldInput extends BaseField {
  inputType: string;

  constructor(config: FieldInputConfig) {
    super(config);
    this.inputType = config.inputType;

    this.formType = 'control';
    this.component = 'input';
  }
}
