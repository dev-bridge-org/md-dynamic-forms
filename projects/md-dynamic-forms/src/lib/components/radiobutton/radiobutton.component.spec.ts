import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {RadiobuttonComponent} from './radiobutton.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {FieldRadio} from '../../model/form/control/field-radio';
import {of} from 'rxjs';

describe('RadiobuttonComponent', () => {
  let spectator: Spectator<RadiobuttonComponent>;
  const createComponent = createComponentFactory({
    component: RadiobuttonComponent,
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      MatRadioModule,
    ]
  });

  beforeEach(() => {
    spectator = createComponent({detectChanges: false});
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should add aria-label to all radio-groups', () => {
    const field = new FieldRadio({name: 'favColor', options: () => of(['Red', 'Green', 'Blue']), label: 'Favorite Color'});
    const group = new FormGroup({favColor: new FormControl('')});

    spectator.component.field = field;
    spectator.component.group = group;

    spectator.detectChanges();

    const ariaLabel = spectator.query('mat-radio-group').attributes.getNamedItem('aria-label');
    expect(ariaLabel).toBeDefined();
    expect(ariaLabel.value).toEqual(field.label);
  });
});
