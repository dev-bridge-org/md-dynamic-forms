import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldButtonConfig extends BaseFieldControlConfig {}

export class FieldButton extends BaseFieldControl {
  constructor(config?: FieldButtonConfig) {
    super(config);

    this.formType = 'button';
    this.component = 'button';
  }
}
