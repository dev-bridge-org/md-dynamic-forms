import {FieldConfig} from './field-config.interface';
import {ColumnConfig} from './column-config.interface';

export interface ListConfig {
  listItem: FieldConfig;
  columnConfigs: ColumnConfig[];
}
