import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldInputConfig extends BaseFieldControlConfig {
  inputType: string;
  maxLength?: number;
}

export class FieldInput extends BaseFieldControl {
  inputType: string;
  maxLength: number;

  constructor(config: FieldInputConfig) {
    super(config);
    this.inputType = config.inputType;
    this.maxLength = config.maxLength || 0;

    this.formType = 'control';
    this.component = 'input';
  }
}
