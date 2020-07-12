import {FieldConfig} from './field-config.interface';
import {TableConfig} from './table/table-config.interface';

export interface ListConfig {
  listItem: FieldConfig;
  config: TableConfig;
}
