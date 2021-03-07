import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {BaseSelectComponent} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-select',
  templateUrl: './select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseSelectComponent {

  constructor(private logger: NGXLogger) {
    super();
  }
}
