import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {BaseSelectComponent, FieldToggle} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent extends BaseSelectComponent<FieldToggle> {

  constructor(private logger: NGXLogger) {
    super();
  }

  get canShowError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
