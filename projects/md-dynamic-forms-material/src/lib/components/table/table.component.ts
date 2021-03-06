import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TableDataSource} from './table-datasource';
import {FormArray, FormGroup} from '@angular/forms';
import {BaseElementComponent, FieldTable, TableColumnConfig, TableConfig} from 'md-dynamic-forms-core';
import {BaseFieldControl} from '../../../../../../dist/md-dynamic-forms-core/lib/model/form/control/base-field-control';

@Component({
  selector: 'md-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends BaseElementComponent<FieldTable> implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<FormGroup>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [];

  private formArray: FormArray;
  public currentColumnConfigs: TableColumnConfig[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.formArray = this.group.get(this.field.name) as FormArray;
    this.dataSource = new TableDataSource();
    this.dataSource.data = this.formArray?.controls as FormGroup[] || [];
    this.setupColumns();
    this.setupColumnConfigs();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  get columnConfigs(): TableColumnConfig[] {
    return this.tableConfig.columns;
  }

  get tableConfig(): TableConfig {
    return this.field.config;
  }

  private setupColumns() {
    this.displayedColumns = this.displayedColumns.concat(this.columnConfigs.map((config) => config.name));
  }

  private setupColumnConfigs() {
    const listConfig = this.field;
    this.currentColumnConfigs = this.columnConfigs.map((config) => {
      const fieldsOfGroup = listConfig.listItem.children as BaseFieldControl[];
      const fieldOfConfig = fieldsOfGroup.find((field) => field.name === config.name);
      if (fieldOfConfig) {
        return {heading: fieldOfConfig.label, width: config.width, name: fieldOfConfig.name};
      }
    });
  }
}
