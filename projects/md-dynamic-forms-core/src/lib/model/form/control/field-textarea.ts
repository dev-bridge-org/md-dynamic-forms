import {FieldInput, FieldInputConfig} from './field-input';

export interface FieldTextareaConfig extends FieldInputConfig {
}

export class FieldTextarea extends FieldInput {

  constructor(config: FieldTextareaConfig) {
    super(config);
    this.component = 'textarea';
    this.formType = 'control';
  }
}
