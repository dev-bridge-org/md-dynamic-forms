import {TableConfig} from '../../table/table-config.interface';
import {FieldArray, FieldArrayConfig} from './field-array';

export interface FieldTableConfig extends FieldArrayConfig {
  config: TableConfig;
}

export class FieldTable extends FieldArray {
  config: TableConfig;

  constructor(config: FieldTableConfig) {
    super(config);

    this.config = config.config;
    this.formType = 'array';
    this.component = 'table';
  }
}
