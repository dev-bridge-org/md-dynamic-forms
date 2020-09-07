import {TableColumnConfig} from './table-column-config.interface';

export interface TableConfig {
  width: number;
  columns: TableColumnConfig[];
  countActive?: boolean;
  withSummary?: boolean;
  dependingSumControl?: string;
}
