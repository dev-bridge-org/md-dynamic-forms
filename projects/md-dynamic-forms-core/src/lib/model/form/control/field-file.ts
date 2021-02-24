import {FieldInput, FieldInputConfig} from './field-input';

export interface FieldFileConfig extends FieldInputConfig {
  errorKeys?: string[];
}

export class FieldFile extends FieldInput {
  errorKeys: string[];

  constructor(config: FieldFileConfig) {
    super(config);

    this.errorKeys = config.errorKeys || [];
    this.component = 'file';
    this.inputType = 'file';
  }

}
