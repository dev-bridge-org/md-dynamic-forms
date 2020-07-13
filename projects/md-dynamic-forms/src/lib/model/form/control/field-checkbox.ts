import {FieldInput, FieldInputConfig} from './field-input';

export interface FieldCheckboxConfig extends FieldInputConfig {

}

export class FieldCheckbox extends FieldInput {
  constructor(config: FieldCheckboxConfig) {
    super(config);

    this.component = 'checkbox';
  }
}
