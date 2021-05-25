import { Component, OnInit } from '@angular/core';
import {
  BaseElementComponent,
  BaseFieldControl,
  FieldTable,
  MdDynamicFormsCoreService,
  TableColumnConfig,
  TableConfig
} from 'md-dynamic-forms-core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'md-clarity-table',
  templateUrl: './clarity-table.component.html',
  styleUrls: ['./clarity-table.component.css']
})
export class ClarityTableComponent extends BaseElementComponent<FieldTable<TableConfig, TableColumnConfig>> implements OnInit {
  newForm: FormGroup = new FormGroup({});

  private formArray: FormArray;
  public currentColumnConfigs: TableColumnConfig[] = [];

  constructor(private dynamicFormsService: MdDynamicFormsCoreService) {
    super();
  }

  ngOnInit(): void {
    this.newForm.addControl(this.field.listItem.name, this.dynamicFormsService.createGroup(this.field.listItem, null));
    this.formArray = this.group.get(this.field.name) as FormArray;
    this.setupColumnConfigs();
  }

  onSubmit() {
    this.formArray.push(this.copyForm(this.newForm.get(this.field.listItem.name).value));
    this.resetForm();
  }

  deleteRow(index: number): void {
    this.formArray.removeAt(index);
  }

  get columnConfigs(): TableColumnConfig[] {
    return this.field.columns;
  }

  get tableConfig(): TableConfig {
    return this.field.config;
  }

  get controls(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
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
