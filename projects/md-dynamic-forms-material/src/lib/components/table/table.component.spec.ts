import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {COMPONENT_SET, FieldGroup, FieldInput, FieldTable, MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {STANDARD_COMPONENT_SET} from '../../model/standard-component-set';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';

describe('TableComponent', () => {
  let spectator: Spectator<TableComponent>;
  const createComponent = createComponentFactory({
    component: TableComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      MdDynamicFormsCoreModule
    ],
    providers: [
      {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
    spectator.component.group = new FormGroup({
      array: new FormArray([]),
    });
    spectator.component.field = new FieldTable({
      name: 'kunden',
      listItem: new FieldGroup({
        children: [
          new FieldInput({
            name: 'test',
            label: 'Test',
            inputType: 'text'
          }),
          new FieldInput({
            name: 'abc',
            label: 'Abc',
            inputType: 'text'
          }),
        ],
        name: 'kunde'
      }),
      config: {
        width: 75
      },
      columns: [
        {name: 'test', width: 50, heading: 'Test'},
        {name: 'abc', width: 50, heading: 'ABC'}
      ]
    });
    spectator.detectChanges();
  });

  it('should compile', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render 2 rows', () => {
    const array: FormArray = new FormArray([
      new FormGroup({
        test: new FormControl(''),
        abc: new FormControl(''),
      }),
      new FormGroup({
        test: new FormControl(''),
        abc: new FormControl(''),
      })
    ]);
    spectator.component.dataSource.data = array.controls as FormGroup[];
    spectator.component.table.dataSource = spectator.component.dataSource;
    spectator.detectChanges();

    expect(spectator.queryAll('tr.mat-row').length).toEqual(2);
  });
});
