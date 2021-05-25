import { ClarityCheckboxComponent } from './clarity-checkbox.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {FieldCheckbox} from 'md-dynamic-forms-core';
import {ClarityModule} from '@clr/angular';

describe('ClarityCheckboxComponent', () => {
  let spectator: Spectator<ClarityCheckboxComponent>;
  const createComponent = createComponentFactory({
    component: ClarityCheckboxComponent,
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

  it('should have a aria-label with correct content', () => {
    const field = new FieldCheckbox({
      name: 'gender',
      label: 'This is a Test-Label'
    });
    const group = new FormGroup({gender: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('input').attributes.getNamedItem('aria-label');
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
    spectator.focus('input');
    spectator.blur('input');

    const error = spectator.query('clr-control-error').innerHTML;
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

    const hint = spectator.query('clr-control-helper').innerHTML;
    expect(hint).toBeDefined();
    expect(hint).toEqual(field.hint);
  });
});
