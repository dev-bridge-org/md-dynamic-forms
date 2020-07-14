import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {FieldTable} from '../../model/form/array/field-table';
import {FieldGroup} from '../../model/form/group/field-group';
import {FieldInput} from '../../model/form/control/field-input';
import {createComponentFactory, Spectator} from '@ngneat/spectator';

describe('TableComponent', () => {
  let spectator: Spectator<TableComponent>;
  const createComponent = createComponentFactory({
    component: TableComponent,
    imports: [
      NoopAnimationsModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
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
        width: 75,
        columns: [
          {name: 'test', width: 50},
          {name: 'abc', width: 50}
        ]
      }
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