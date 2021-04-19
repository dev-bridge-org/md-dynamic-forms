import {TestBed} from '@angular/core/testing';

import {SwitchComponent} from './switch.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {HarnessLoader} from '@angular/cdk/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {FieldSwitch} from 'md-dynamic-forms-core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSlideToggleHarness} from '@angular/material/slide-toggle/testing';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('SwitchComponent', () => {
  let spectator: Spectator<SwitchComponent>;
  let loader: HarnessLoader;

  const createComponent = createComponentFactory({
    component: SwitchComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      MatSlideToggleModule,
      MatFormFieldModule
    ]
  });

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
    loader = TestbedHarnessEnvironment.loader(spectator.fixture);
  });

  it('should have correct values set', async () => {
    const field = new FieldSwitch({name: 'testSwitch', label: 'Switch-Test'});
    const form = new FormGroup({testSwitch: new FormControl(true)});
    spectator.component.field = field;
    spectator.component.group = form;
    spectator.detectChanges();
    const switchHarness = await loader.getHarness(MatSlideToggleHarness);
    expect(await switchHarness.getLabelText()).toEqual(field.label);
    expect(await switchHarness.isChecked()).toEqual(true);
  });
});
