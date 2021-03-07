import {FieldToggle} from './field-toggle';
import {of} from 'rxjs';

describe('FieldToggle', () => {
  it('should create Toggle by configuration', () => {
    const field = new FieldToggle({
      name: 'minAge',
      label: 'Are you over 18',
      options: () => of([
        {value: true, label: 'Yes'},
        {value: false, label: 'No'}
      ])
    });
    expect(field.name).toEqual('minAge');
    expect(field.label).toEqual('Are you over 18');
    expect(field.componentOfConfig).toEqual('toggle');
  });
});
