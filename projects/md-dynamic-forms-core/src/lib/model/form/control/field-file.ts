import {BaseField, BaseFieldConfig} from '../base-field';

export interface FieldFileConfig extends BaseFieldConfig {
  fileControlname: string;
}

export class FieldFile extends BaseField {
  fileControlname: string;

  constructor(config: FieldFileConfig) {
    super(config);
    this.fileControlname = config.fileControlname;
  }

}
