import { ClarityDatepickerComponent } from './clarity-datepicker.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FieldDatepicker} from 'md-dynamic-forms-core';
import {ClarityModule} from '@clr/angular';

describe('ClarityDatepickerComponent', () => {
  let spectator: Spectator<ClarityDatepickerComponent>;
  const createComponent = createComponentFactory({
    component: ClarityDatepickerComponent,
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
    const field = new FieldDatepicker({name: 'test', label: 'This is a Test-Label'});
    const group = new FormGroup({test: new FormControl('')});
    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('input').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel.value).toEqual(field.label);
  });

  it('should have aria-required set to true', () => {
    const field = new FieldDatepicker({
      name: 'test',
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
    const field = new FieldDatepicker({
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
});
