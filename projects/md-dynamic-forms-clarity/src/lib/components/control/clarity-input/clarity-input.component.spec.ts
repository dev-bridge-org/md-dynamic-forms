import { ClarityInputComponent } from './clarity-input.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {FieldInput} from 'md-dynamic-forms-core';

describe('ClarityInputComponent', () => {
  let spectator: Spectator<ClarityInputComponent>;
  const createComponent = createComponentFactory({
    component: ClarityInputComponent,
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
    spectator.focus('input');
    spectator.blur('input');

    const error = spectator.query('clr-input-container clr-control-error').innerHTML;
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

    const hint = spectator.query('clr-control-helper').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(field.hint);
  });
});
