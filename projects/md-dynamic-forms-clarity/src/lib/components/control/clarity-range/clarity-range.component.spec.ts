import { ClarityRangeComponent } from './clarity-range.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {ClarityModule} from '@clr/angular';
import {FieldSlider} from 'md-dynamic-forms-core';

describe('ClarityRangeComponent', () => {
  let spectator: Spectator<ClarityRangeComponent>;
  const createComponent = createComponentFactory({
    component: ClarityRangeComponent,
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

  it('should have hint displayed when configured', () => {
    const field = new FieldSlider({
      min: 10, max: 20, withThumbLabel: true, step: 1,
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
