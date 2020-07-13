import {MdDynamicFormsService} from './md-dynamic-forms.service';
import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FieldGroup} from './model/form/group/field-group';
import {FieldInput} from './model/form/control/field-input';

describe('MdDynamicFormsService', () => {
  let spectator: SpectatorService<MdDynamicFormsService>;
  const createService = createServiceFactory({
    service: MdDynamicFormsService,
    imports: [
      ReactiveFormsModule,
    ]
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should create FormControl from config', () => {
    const config = new FieldInput({
      name: 'testInput',
      inputType: 'text',
      label: 'Input-Text' ,
      validations: [
        {message: 'Test', validator: Validators.required, name: 'required'},
        {message: 'BLA', validator: Validators.email, name: 'mail'}
      ]
    });
    const control = spectator.service.createControl(config, 'test@test.de');
    expect(control).toBeTruthy();
    expect(control.value).toEqual('test@test.de');
    expect(control.valid).toBeTruthy();
    expect(control.validator).toBeDefined();
  });

  it('should create FormGroup from config', () => {
    const config: FieldGroup = new FieldGroup(
      {name: 'form', children: [
        new FieldInput({name: 'testInput', inputType: 'text', label: 'Input-Text'})
      ]
    });
    const group = spectator.service.createGroup(config, null);
    expect(group).toBeTruthy();
    expect(group.contains(config.children[0].name)).toBeTruthy();
    expect(group.valid).toBeTruthy();
  });
});
