import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {InputComponent} from './input.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FieldInput} from 'md-dynamic-forms-core';

describe('InputComponent', () => {
  let spectator: Spectator<InputComponent>;
  const createComponent = createComponentFactory({
    component: InputComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a aria-label with correct content', () => {
    const field = new FieldInput({name: 'test', inputType: 'text', label: 'This is a Test-Label'});
    const group = new FormGroup({test: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('input').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should have set the correct inputType', () => {
    const field = new FieldInput({name: 'test', inputType: 'number', label: 'This is a Test-Label'});
    const group = new FormGroup({test: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const inputType = spectator.query('input').attributes.getNamedItem('type');
    expect(inputType).toBeDefined();
    expect(inputType.value).toEqual(field.inputType);
  });

  it('should have aria-required set to true', () => {
    const field = new FieldInput({
      name: 'test',
      inputType: 'number',
      label: 'This is a Test-Label',
      validations: [{name: 'required', validator: Validators.required, message: 'Required field'}],
    });
    const group = new FormGroup({test: new FormControl('', [Validators.required])});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaRequired = spectator.query('input').attributes.getNamedItem('aria-required');
    expect(ariaRequired).toBeDefined();
    expect(ariaRequired.value).toEqual('true');
  });

  it('should display error', () => {
    const field = new FieldInput({
      name: 'test',
      inputType: 'number',
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

  it('should have aria-label set to label-context', () => {
    const field = new FieldInput({
      name: 'test',
      inputType: 'text',
      label: 'This is the label'
    });
    const group = new FormGroup({test: new FormControl('')});

    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('input').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeDefined();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should have hint displayed when configured', () => {
    const field = new FieldInput({
      name: 'test',
      inputType: 'text',
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

  it('should have count-hint displayed when configured', () => {
    const field = new FieldInput({
      name: 'test',
      inputType: 'text',
      label: 'This is the label',
      maxLength: 20
    });
    const group = new FormGroup({test: new FormControl('')});

    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const hint = spectator.query('mat-hint.count-hint').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(`0 / ${field.maxLength}`);
  });
});
