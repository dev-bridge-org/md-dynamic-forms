import {FieldInput, FieldInputConfig} from './field-input';

export interface FieldFileConfig extends FieldInputConfig {
}

export class FieldFile extends FieldInput {
  constructor(config: FieldFileConfig) {
    super(config);

    this.component = 'file';
    this.inputType = 'file';
  }

}
