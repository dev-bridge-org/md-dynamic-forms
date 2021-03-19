import {Validator} from '../validation/validator.interface';
import {AsyncValidator} from '../validation/async-validator.interface';
export interface BaseFieldConfig {
  name: string;
  id?: string;
  component?: string;
  validations?: Validator[];
  asyncValidations?: AsyncValidator[];
  readonly?: boolean;
  dependencies?: string[];
}


export abstract class BaseField {
  name: string;
  id: string;
  validations?: Validator[];
  asyncValidations?: AsyncValidator[];
  readonly?: boolean;
  dependencies?: string[];

  protected formType: string;
  protected component: string;

  protected constructor(config: BaseFieldConfig) {
    this.name = config.name;
    this.id = config.id || '';
    this.validations = config.validations || [];
    this.asyncValidations = config.asyncValidations || [];
    this.readonly = config.readonly || false;
    this.dependencies = config.dependencies || [];
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
