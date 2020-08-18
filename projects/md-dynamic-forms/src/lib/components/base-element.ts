import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BaseField} from '../model/form/base-field';

export class BaseElement<T extends BaseField> {
  field: T;
  group: FormGroup;

  get control(): AbstractControl {
    return this.group.get(this.field.name);
  }

  get dependencyControls(): AbstractControl[] {
    return this.field.dependencies.map(dependency => this.group.root.get(dependency));
  }
}
