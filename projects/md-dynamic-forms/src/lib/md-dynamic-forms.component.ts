import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldConfig} from './model/field-config.interface';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Validator} from './model/validator.interface';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'md-dynamic-forms',
  template: `
      <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
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
  @Input() config: FieldConfig = null;

  @Input() value: any = null;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private logger: NGXLogger) {}

  ngOnInit() {
    this.form = this.createGroup(this.config, this.value);
    this.logger.info('Form: ', this.form);
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

  createGroup(config: FieldConfig, value: any): FormGroup {
    const group = this.fb.group({}, {validators: this.bindValidations(config.validations || [])});
    config.children.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      let control = null;
      switch (field.formType) {
        case 'group':
          control = this.createGroup(field, value[field.name]);
          break;
        case 'array':
          control = this.createArray(field, value[field.name]);
          break;
        case 'control':
          control = this.createControl(field, value[field.name]);
          break;
      }
      group.addControl(field.name, control);
    });
    return group;
  }

  createArray(config: FieldConfig, value: any): FormArray {
    const array = this.fb.array([], {validators: this.bindValidations(config.validations || [])});
    for (let i = 0; i < value.length; i++) {
      const control = this.createGroup(config.listItem, value[i]);
      array.push(control);
    }
    return array;
  }

  createControl(config: FieldConfig, value: any): FormControl {
    return this.fb.control(
      value,
      this.bindValidations(config.validations || [])
    );
  }

  bindValidations(validations: Validator[]): ValidatorFn {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

}
