import { ClarityRadioComponent } from './clarity-radio.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {of} from 'rxjs';
import {ClarityModule} from '@clr/angular';
import {FieldRadio} from 'md-dynamic-forms-core';

describe('ClarityRadioComponent', () => {
  let spectator: Spectator<ClarityRadioComponent>;
  const createComponent = createComponentFactory({
    component: ClarityRadioComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      ClarityModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should display error', () => {
    const field = new FieldRadio({
      name: 'test',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]),
      label: 'This is a Test-Label',
      validations: [{name: 'required', validator: Validators.required, message: 'Required field'}],
    });
    const group = new FormGroup({test: new FormControl('', [Validators.required])});
    group.markAllAsTouched();
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();
    spectator.focus('input');
    spectator.blur('input');

    const error = spectator.query('clr-control-error').innerHTML;
    expect(error).toBeDefined();
    expect(error).toEqual('Required field');
  });

  it('should have hint displayed when configured', () => {
    const field = new FieldRadio({
      name: 'test',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]),
      label: 'This is the label',
      hint: 'Just a hint'
    });
    const group = new FormGroup({test: new FormControl('')});

    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const hint = spectator.query('clr-control-helper').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(field.hint);
  });
});
