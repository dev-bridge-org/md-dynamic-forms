import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {SelectComponent} from '../select/select.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FieldRadio, FieldSelect} from 'md-dynamic-forms-core';
import {of} from 'rxjs';
import {RadiobuttonComponent} from './radiobutton.component';
import {MatRadioModule} from '@angular/material/radio';

describe('RadiobuttonComponent', () => {
  let spectator: Spectator<RadiobuttonComponent>;
  const createComponent = createComponentFactory({
    component: RadiobuttonComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      MatFormFieldModule,
      MatRadioModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a aria-label with correct content', () => {
    const field = new FieldRadio({
      name: 'gender',
      label: 'This is a Test-Label',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}])
    });
    const group = new FormGroup({gender: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('mat-radio-group').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should have aria-required set to true', () => {
    const field = new FieldRadio({
      name: 'gender',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]),
      label: 'This is a Test-Label',
      validations: [{name: 'required', validator: Validators.required, message: 'Required field'}],
    });
    const group = new FormGroup({gender: new FormControl('', [Validators.required])});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaRequired = spectator.query('mat-radio-group').attributes.getNamedItem('aria-required');
    expect(ariaRequired).toBeDefined();
    expect(ariaRequired.value).toEqual('true');
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

    const error = spectator.query('mat-error').innerHTML;
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

    const hint = spectator.query('mat-hint').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(field.hint);
  });
});
