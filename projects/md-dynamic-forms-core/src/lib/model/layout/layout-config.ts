import {RowConfig} from './row-config';

export interface LayoutConfig {
  layoutId: string;
  maxWidth: number | null;
  rows: RowConfig[];
}
