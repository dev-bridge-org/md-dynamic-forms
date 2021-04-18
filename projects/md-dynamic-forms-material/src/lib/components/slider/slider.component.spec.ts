import { TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatSliderHarness} from '@angular/material/slider/testing';
import {FieldSlider} from 'md-dynamic-forms-core';

describe('SliderComponent', () => {
  let spectator: Spectator<SliderComponent>;
  let loader: HarnessLoader;

  const createComponent = createComponentFactory({
    component: SliderComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      LoggerTestingModule,
      MatSliderModule
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
    const field = new FieldSlider({name: 'testSlider', min: 10, max: 20, withThumbLabel: true, step: 1, label: 'Slider-Test'});
    const form = new FormGroup({testSlider: new FormControl(12)});
    spectator.component.field = field;
    spectator.component.group = form;
    spectator.detectChanges();
    const slider = await loader.getHarness(MatSliderHarness);
    expect(await slider.getDisplayValue()).toEqual('12');
    expect(await slider.getValue()).toEqual(12);
    expect(await slider.getMinValue()).toEqual(10);
    expect(await slider.getMaxValue()).toEqual(20);
  });
});
