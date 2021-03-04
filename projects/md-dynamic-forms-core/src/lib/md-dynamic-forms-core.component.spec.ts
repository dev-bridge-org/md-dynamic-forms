import {MdDynamicFormsCoreComponent} from './md-dynamic-forms-core.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {FieldGroup} from './model/form/group/field-group';
import {FieldInput} from './model/form/control/field-input';
import {MdDynamicFormsCoreService} from './md-dynamic-forms-core.service';
import {Component} from '@angular/core';
import {BaseElementComponent} from './components/base-element.component';
import {COMPONENT_SET} from './model/component-set';

@Component({template: ''})
class TestComponent extends BaseElementComponent<FieldInput> {}

const set = {
  input: TestComponent
};

describe('MdDynamicFormsCoreComponent', () => {
  let spectator: Spectator<MdDynamicFormsCoreComponent>;
  const createComponent = createComponentFactory({
    component: MdDynamicFormsCoreComponent,
    declarations: [
      MdDynamicFieldDirective,
      TestComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      LoggerTestingModule,
    ],
    providers: [
      MdDynamicFormsCoreService,
      {provide: COMPONENT_SET, useValue: set}
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    spectator.component.config = new FieldGroup({name: 'test', children: [new FieldInput({name: 'testInput', inputType: 'text', label: 'Test'})]});
    spectator.detectChanges();
    expect(spectator.component).toBeTruthy();
  });
});
