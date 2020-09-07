import {FieldGroup, FieldGroupConfig} from './field-group';
import {LayoutConfig} from '../../layout/layout-config';

export interface FieldLayoutGroupConfig extends FieldGroupConfig {
  layouts: LayoutConfig[];
}

export class FieldLayoutGroup extends FieldGroup {
  layouts: LayoutConfig[];

  constructor(config: FieldLayoutGroupConfig) {
    super(config);

    this.formType = 'group';
    this.component = config.component || 'group-layout';
    this.layouts = config.layouts;
  }
}
