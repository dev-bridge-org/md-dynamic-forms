import {ColumnConfig} from './column-config.interface';

export interface TableConfig {
  width: number;
  columns: ColumnConfig[];
  countActive?: boolean;
  withSummary?: boolean;
  dependingSumControl?: string;
}
