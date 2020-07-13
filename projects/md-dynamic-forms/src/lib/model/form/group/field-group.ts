import {BaseField, BaseFieldConfig} from '../base-field';

export interface FieldGroupConfig extends BaseFieldConfig{
  children: BaseField[];
}

export class FieldGroup extends BaseField {
  children: BaseField[];

  constructor(config: FieldGroupConfig) {
    super(config);
    this.children = config.children;

    this.formType = 'group';
    this.component = config.component || 'group';
  }
}
