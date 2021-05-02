import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {FormArray, FormGroup} from '@angular/forms';
import {
  BaseElementComponent,
  BaseFieldControl,
  FieldTable,
  MdDynamicFormsCoreService,
  TableColumnConfig,
  TableConfig
} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends BaseElementComponent<FieldTable<TableConfig, TableColumnConfig>> implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<FormGroup>;
  dataSource: MatTableDataSource<FormGroup>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [];

  newForm: FormGroup = new FormGroup({});

  private formArray: FormArray;
  public currentColumnConfigs: TableColumnConfig[] = [];

  constructor(private dynamicFormsService: MdDynamicFormsCoreService) {
    super();
  }

  ngOnInit() {
    this.newForm.addControl(this.field.listItem.name, this.dynamicFormsService.createGroup(this.field.listItem, null));
    this.formArray = this.group.get(this.field.name) as FormArray;
    this.dataSource = new MatTableDataSource<FormGroup>();
    this.dataSource.data = this.formArray?.controls as FormGroup[] || [];
    this.setupColumns();
    this.setupColumnConfigs();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onSubmit() {
    this.formArray.push(this.copyForm(this.newForm.get(this.field.listItem.name).value));
    this.dataSource.data = this.formArray.controls as FormGroup[];
    this.resetForm();
  }

  deleteRow(index: number): void {
    this.formArray.removeAt(index);
    this.dataSource.data = this.formArray.controls as FormGroup[];
  }

  get columnConfigs(): TableColumnConfig[] {
    return this.field.columns;
  }

  get tableConfig(): TableConfig {
    return this.field.config;
  }

  private setupColumns() {
    this.displayedColumns = this.columnConfigs.map((config) => config.name).concat(['delete']);
  }

  private setupColumnConfigs() {
    const listConfig = this.field;
    this.currentColumnConfigs = this.columnConfigs.map((config) => {
      const fieldsOfGroup = listConfig.listItem.children.filter(field => field.typeOfFormField !== 'button') as BaseFieldControl[];
      const fieldOfConfig = fieldsOfGroup.find((field) => field.name === config.name);
      if (fieldOfConfig) {
        return {heading: fieldOfConfig.label, width: config.width, name: fieldOfConfig.name};
      }
    });
  }

  private copyForm(value: unknown): FormGroup {
    return this.dynamicFormsService.createGroup(this.field.listItem, value);
  }

  private resetForm(): void {
    this.newForm.reset();
    this.newForm.markAsUntouched();
    this.newForm.markAsPristine();
  }
}
