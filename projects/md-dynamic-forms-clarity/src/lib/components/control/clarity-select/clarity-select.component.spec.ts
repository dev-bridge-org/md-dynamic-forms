import { ClaritySelectComponent } from './clarity-select.component';
import {of} from 'rxjs';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import {FieldSelect} from 'md-dynamic-forms-core';

describe('ClaritySelectComponent', () => {
  let spectator: Spectator<ClaritySelectComponent>;
  const createComponent = createComponentFactory({
    component: ClaritySelectComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      ClarityModule
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

    const ariaLabel = spectator.query('select').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should have aria-required set to true', () => {
    const field = new FieldSelect({
      name: 'gender',
      options: () => of([{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]),
      label: 'This is a Test-Label',
      validations: [{name: 'required', validator: Validators.required, message: 'Required field'}],
    });
    const group = new FormGroup({gender: new FormControl('', [Validators.required])});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaRequired = spectator.query('select').attributes.getNamedItem('aria-required');
    expect(ariaRequired).toBeDefined();
    expect(ariaRequired.value).toEqual('true');
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
    spectator.focus('select');
    spectator.blur('select');

    const error = spectator.query('clr-control-error').innerHTML;
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

    const hint = spectator.query('clr-control-helper').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(field.hint);
  });
});
