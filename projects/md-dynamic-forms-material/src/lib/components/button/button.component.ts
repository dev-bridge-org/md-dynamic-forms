import {Component} from '@angular/core';
import {BaseElementComponent, BaseFieldControl} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-button',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <button type="submit" mat-raised-button color="primary" [disabled]="group.invalid">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class ButtonComponent extends BaseElementComponent<BaseFieldControl> {
  constructor() {
    super();
  }
}
