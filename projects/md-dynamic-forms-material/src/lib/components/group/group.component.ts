import {Component} from '@angular/core';
import {BaseElementComponent, FieldGroup} from 'md-dynamic-forms-core';

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
export class GroupComponent extends BaseElementComponent<FieldGroup> {
  constructor() {
    super();
  }
}
