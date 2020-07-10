import {Component} from '@angular/core';
import {FormArray} from '@angular/forms';
import {BaseElement} from '../base-element';

@Component({
  selector: 'md-list',
  template: `
      <ol>
          <li *ngFor="let item of formArray.getRawValue()">{{item | json}}</li>
      </ol>
  `,
  styles: []
})
export class ListComponent extends BaseElement {
  constructor() {
    super();
  }

  get formArray(): FormArray {
    return this.group.get(this.field.name) as FormArray;
  }
}
