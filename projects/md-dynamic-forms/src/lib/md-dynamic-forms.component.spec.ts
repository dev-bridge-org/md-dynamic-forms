import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDynamicFormsComponent } from './md-dynamic-forms.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {ReactiveFormsModule} from '@angular/forms';
import {MdDynamicFieldDirective} from './md-dynamic-field.directive';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {InputComponent} from './components/input/input.component';
import {FieldGroup} from './model/form/group/field-group';
import {FieldInput} from './model/form/control/field-input';
import {MdDynamicFormsService} from './md-dynamic-forms.service';
import {COMPONENT_SET} from './model/component-set';
import {STANDARD_COMPONENT_SET} from './model/standard-component-set';
import {MockComponent} from 'ng-mocks';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

describe('MdDynamicFormsComponent', () => {
  let spectator: Spectator<MdDynamicFormsComponent>;
  const createComponent = createComponentFactory({
    component: MdDynamicFormsComponent,
    declarations: [
      MdDynamicFieldDirective,
      MockComponent(InputComponent),
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      LoggerTestingModule,
    ],
    providers: [
      MdDynamicFormsService,
      {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
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
