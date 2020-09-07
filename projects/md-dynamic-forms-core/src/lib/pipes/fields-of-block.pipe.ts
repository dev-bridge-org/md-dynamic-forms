import { Pipe, PipeTransform } from '@angular/core';
import {BaseField} from '../model/form/base-field';
import {FieldGroup} from '../model/form/group/field-group';

@Pipe({
  name: 'fieldsOfBlock',
  pure: true
})
export class FieldsOfBlockPipe implements PipeTransform {

  transform(controlnames: string[], group: FieldGroup): BaseField[] {
    return controlnames
      .map(controlname => group.children.find(child => child.name === controlname))
      .filter(field => field !== undefined);
  }

}
