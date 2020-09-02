import {BaseField, BaseFieldConfig} from '../base-field';
import {FieldGroup} from '../group/field-group';

export interface FieldArrayConfig extends BaseFieldConfig {
  listItem: FieldGroup;
}

export class FieldArray extends BaseField {
  listItem: FieldGroup;

  constructor(config: FieldArrayConfig) {
    super(config);
    this.listItem = config.listItem;

    this.formType = 'array';
    this.component = 'list';
  }
}
