export interface TableColumnConfig {
  heading: string;
  width: number;
  name: string;
  sortable?: boolean;
  component?: any;
  fieldtype?: string;
  readonly?: boolean;
}
