import {Component} from '@angular/core';
import {BaseElement} from '../base-element';
import {FieldGroup} from '../../model/form/group/field-group';

@Component({
  selector: 'md-group',
  template: `
      <div class="group">
          <ng-container *ngFor="let field of field.children;" mdDynamicField [field]="field" [group]="group">
          </ng-container>
      </div>
  `,
  styles: [
    `
    .group {
        display: flex;
        flex-direction: row;
    }
    `
  ]
})
export class GroupComponent extends BaseElement<FieldGroup> {
  constructor() {
    super();
  }
}
