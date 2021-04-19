import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldSwitchConfig extends BaseFieldControlConfig {
}

export class FieldSwitch extends BaseFieldControl {
  constructor(config: FieldSwitchConfig) {
    super(config);

    this.formType = 'control';
    this.component = 'switch';
  }
}
