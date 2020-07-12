export interface TableColumnConfig {
  heading: string;
  columnWidth: number;
  propertyName: string;
  sortable?: boolean;
  component?: any;
  fieldtype?: string;
  readonly?: boolean;
}
