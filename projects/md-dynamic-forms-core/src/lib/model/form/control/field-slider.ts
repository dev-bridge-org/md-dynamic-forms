import {BaseFieldControl, BaseFieldControlConfig} from './base-field-control';

export interface FieldSliderConfig extends BaseFieldControlConfig {
  min: number;
  max: number;
  step: number;
  withThumbLabel: boolean;
}

export class FieldSlider extends BaseFieldControl {
  min: number;
  max: number;
  step: number;
  withThumbLabel: boolean;

  constructor(config: FieldSliderConfig) {
    super(config);

    this.min = config.min;
    this.max = config.max;
    this.step = config.step;
    this.withThumbLabel = config.withThumbLabel;

    this.formType = 'control';
    this.component = 'slider';
  }
}
