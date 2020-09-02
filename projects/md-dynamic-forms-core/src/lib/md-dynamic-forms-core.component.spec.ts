import {MdDynamicFormsCoreComponent} from './md-dynamic-forms-core.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {FieldGroup} from './model/form/group/field-group';
import {FieldInput} from './model/form/control/field-input';
import {MdDynamicFormsCoreService} from './md-dynamic-forms-core.service';

describe('MdDynamicFormsCoreComponent', () => {
  let spectator: Spectator<MdDynamicFormsCoreComponent>;
  const createComponent = createComponentFactory({
    component: MdDynamicFormsCoreComponent,
    declarations: [
      MdDynamicFieldDirective,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      LoggerTestingModule,
    ],
    providers: [
      MdDynamicFormsCoreService
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    spectator.component.config = new FieldGroup({name: 'test', children: [new FieldInput({name: 'testInput', inputType: 'text'})]});
    spectator.detectChanges();
    expect(spectator.component).toBeTruthy();
  });
});
