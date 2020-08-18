import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NGXLogger} from 'ngx-logger';
import {MdDynamicFormsService} from './md-dynamic-forms.service';
import {FieldGroup} from './model/form/group/field-group';

@Component({
  selector: 'md-dynamic-forms',
  template: `
      <form class="dynamic-form" *ngIf="form" [formGroup]="form" (submit)="onSubmit($event)">
          <ng-container *ngFor="let field of config.children;" mdDynamicField [field]="field" [group]="form">
          </ng-container>
      </form>
  `,
  styles: [`
    .dynamic-form {
        display: flex;
        flex-direction: column;
    }
  `]
})
export class MdDynamicFormsComponent implements OnInit {
  @Input() config: FieldGroup = null;

  @Input() value: any = null;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  @Output() formChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(private dynamicFormsService: MdDynamicFormsService, private logger: NGXLogger) {}

  ngOnInit() {
    this.form = this.dynamicFormsService.createGroup(this.config, this.value);
    this.formChange.emit(this.form);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

}
