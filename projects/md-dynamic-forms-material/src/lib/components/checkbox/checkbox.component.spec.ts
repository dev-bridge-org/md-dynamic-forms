import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CheckboxComponent} from './checkbox.component';
import {FieldCheckbox} from 'md-dynamic-forms-core';
import {MatCheckboxModule} from '@angular/material/checkbox';

describe('CheckboxComponent', () => {
  let spectator: Spectator<CheckboxComponent>;
  const createComponent = createComponentFactory({
    component: CheckboxComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      MatFormFieldModule,
      MatCheckboxModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a aria-label with correct content', () => {
    const field = new FieldCheckbox({
      name: 'gender',
      label: 'This is a Test-Label'
    });
    const group = new FormGroup({gender: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('mat-checkbox').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should display error', () => {
    const field = new FieldCheckbox({
      name: 'test',
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
    const field = new FieldCheckbox({
      name: 'test',
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
