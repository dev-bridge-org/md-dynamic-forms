import {TableConfig} from '../../table/table-config.interface';
import {FieldArray, FieldArrayConfig} from './field-array';
import {TableColumnConfig} from '../../table/table-column-config.interface';

export interface FieldTableConfig<T extends TableConfig, TC extends TableColumnConfig> extends FieldArrayConfig {
  config: T;
  columns: TC[];
}

export class FieldTable<T extends TableConfig, TC extends TableColumnConfig> extends FieldArray {
  config: T;
  columns: TC[];

  constructor(config: FieldTableConfig<T, TC>) {
    super(config);

    this.config = config.config;
    this.columns = config.columns;
    this.formType = 'array';
    this.component = 'table';
  }
}
