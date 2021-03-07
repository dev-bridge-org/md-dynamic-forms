import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FieldSelect} from 'md-dynamic-forms-core';
import {ToggleComponent} from './toggle.component';
import {of} from 'rxjs';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

describe('ToggleComponent', () => {
  let spectator: Spectator<ToggleComponent>;
  const createComponent = createComponentFactory({
    component: ToggleComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      MatFormFieldModule,
      MatButtonToggleModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a aria-label with correct content', () => {
    const field = new FieldSelect({
      name: 'gender',
      label: 'This is a Test-Label',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}])
    });
    const group = new FormGroup({gender: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('mat-button-toggle-group').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should display error', () => {
    const field = new FieldSelect({
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
    const field = new FieldSelect({
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
