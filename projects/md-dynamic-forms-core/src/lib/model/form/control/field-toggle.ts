import {FieldSelect, FieldSelectConfig} from './field-select';

export interface FieldToggleConfig extends FieldSelectConfig {

}

export class FieldToggle extends FieldSelect {

  constructor(config?: FieldToggleConfig) {
    super(config);

    this.component = 'toggle';
  }
}
