import {Validator} from '../validation/validator.interface';
import {AsyncValidator} from '../validation/async-validator.interface';
export interface BaseFieldConfig {
  label?: string;
  name: string;
  component?: string;
  validations?: Validator[];
  asyncValidations?: AsyncValidator[];
}


export abstract class BaseField {
  label?: string;
  name: string;
  validations?: Validator[];
  asyncValidations?: AsyncValidator[];

  protected formType: string;
  protected component: string;

  protected constructor(config: BaseFieldConfig) {
    this.label = config.label || null;
    this.name = config.name;
    this.validations = config.validations || [];
    this.asyncValidations = config.asyncValidations || [];
  }

  get typeOfFormField() {
    return this.formType;
  }

  get componentOfConfig() {
    return this.component;
  }

  set componentOfConfig(component: string) {
    this.component = component;
  }
}
