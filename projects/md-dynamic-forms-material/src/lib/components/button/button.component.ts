import {Component} from '@angular/core';
import {BaseElement, BaseField} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-button',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class ButtonComponent extends BaseElement<BaseField> {
  constructor() {
    super();
  }
}
