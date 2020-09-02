import {BlockConfig} from './block-config';

export interface ColumnConfig {
  columnId: string;
  columnWidth: string;
  blocks: BlockConfig[];
}
