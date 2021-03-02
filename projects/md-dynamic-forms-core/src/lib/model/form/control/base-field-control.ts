import {BaseField, BaseFieldConfig} from '../base-field';

export interface BaseFieldControlConfig extends BaseFieldConfig {
  hint?: string;
  label: string;
}

export abstract class BaseFieldControl extends BaseField {
  hint?: string;
  label: string;

  protected constructor(config: BaseFieldControlConfig) {
    super(config);

    this.label = config.label;
    this.hint = config.hint || null;
  }
}
