import {ColumnConfig} from './column-config';

export interface RowConfig {
  rowId: string;
  columns: ColumnConfig[];
}
