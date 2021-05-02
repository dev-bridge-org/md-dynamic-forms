import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NGXLogger} from 'ngx-logger';
import {FieldGroup} from './model/form/group/field-group';
import {MdDynamicFormsCoreService} from './md-dynamic-forms-core.service';

@Component({
  selector: 'md-dynamic-forms-core',
  template: `
      <form class="dynamic-form" *ngIf="form" [formGroup]="form" (submit)="onSubmit($event)">
          <ng-container *ngFor="let field of config.children;" mdDynamicField [field]="field" [group]="form">
          </ng-container>
      </form>
  `,
  styles: [
      `
          .dynamic-form {
              display: flex;
              flex-direction: column;
          }
    `
  ]
})
export class MdDynamicFormsCoreComponent implements OnChanges {
  @Input() config: FieldGroup = null;

  @Input() value: any = null;

  @Output() submitChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() formChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(private dynamicFormsService: MdDynamicFormsCoreService, private logger: NGXLogger) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config) {
      this.createForm();
    }
  }

  // TODO: fix submit not triggering
  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submitChange.emit(this.form.value);
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

  private createForm(): void {
    this.form = this.dynamicFormsService.createGroup(this.config, this.value);
    this.formChange.emit(this.form);
  }
}
