import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Validator} from '@lib/model/validator.interface';
import {FieldConfig} from '@lib/model/field-config.interface';

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

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const value = {name: 'Test', adress: {street: 'Musterweg', city: 'Nürnberg'}, kunden: [{test: 'test', abc: 'def'}, {test: 'def', abc: 'test'}]};
    this.form = this.createGroup(this.config, value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createGroup(config: FieldConfig, value: any) {
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

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

}
