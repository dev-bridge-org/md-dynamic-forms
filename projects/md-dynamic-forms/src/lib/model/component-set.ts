import {InjectionToken} from '@angular/core';

export interface ComponentSet {
  input;
  button;
  select;
  date;
  radiobutton;
  checkbox;
}

export const COMPONENT_SET = new InjectionToken<ComponentSet>('componentSet');
