import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FieldCheckbox, FieldDatepicker, FieldGroup, FieldInput, FieldRadio, FieldSelect, FieldToggle} from 'md-dynamic-forms-core';
import {of} from 'rxjs';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  form: FormGroup;
  regConfig: FieldGroup = new FieldGroup({
    name: 'testform',
    children: [
      new FieldInput({
        name: 'name',
        inputType: 'text',
        label: 'Name',
        maxLength: 20,
        validations: [
          {name: 'required', message: 'Name is Required', validator: Validators.required},
          {name: 'maxlength', message: 'Exceeded max length of 20', validator: Validators.maxLength(20)}
        ]
      }),
      new FieldInput({
        name: 'firstname',
        inputType: 'text',
        label: 'Firstname',
        hint: 'Enter your Firstname',
        validations: [
          {name: 'required', message: 'Firstname is Required', validator: Validators.required},
          {name: 'pattern', message: 'only alphabetic characters allowed', validator: Validators.pattern(/[a-zA-Z]/g)}
        ]
      }),
      new FieldInput({
        name: 'age',
        inputType: 'number',
        label: 'Age',
        hint: 'Min. age: 18',
        validations: [
          {name: 'required', message: 'Age is Required', validator: Validators.required},
          {name: 'min', message: 'You need to be atleast 18 years', validator: Validators.min(18)}
        ]
      }),
      new FieldDatepicker({
        name: 'dob',
        label: 'DOB',
        validations: [
          {name: 'required', validator: Validators.required, message: 'Date of Birth Required'}
        ]
      }),
      new FieldDatepicker({
        name: 'dobHint',
        label: 'DOB Hint',
        hint: 'Please enter your date of birth',
        validations: []
      }),
      new FieldSelect({
        name: 'gender',
        label: 'Gender',
        hint: 'Select your gender',
        options: () => of([
          {value: 'male', label: 'Male'},
          {value: 'female', label: 'Female'},
          {value: 'diverse', label: 'Diverse'}
        ])
      }),
      new FieldSelect({
        name: 'job',
        label: 'Job',
        hint: 'Select your job',
        options: () => of([
          {value: 'engineer', label: 'Engineer'},
          {value: 'architect', label: 'Architect'}
        ]),
        validations: [
          {name: 'required', validator: Validators.required, message: 'Job is required'}
        ]
      }),
      new FieldToggle({
        name: 'job',
        label: 'Job',
        hint: 'Select your job',
        options: () => of([
          {value: 'engineer', label: 'Engineer'},
          {value: 'architect', label: 'Architect'}
        ]),
        validations: [
          {name: 'required', validator: Validators.required, message: 'Job is required'}
        ]
      }),
      new FieldCheckbox({
        name: 'agb',
        label: 'AGB',
        hint: 'read the AGB',
        validations: [
          {name: 'required', validator: Validators.required, message: 'Job is required'}
        ]
      }),
      new FieldRadio({
        label: 'Blood Group',
        name: 'bloodGroup',
        options: () => of([
          {label: '0', value: '0'},
          {label: 'A-', value: 'AMinus'},
        ])
      })
    ]
  });

  public value;

  constructor() {}

  ngOnInit(): void {
    // this.value = {name: '', kunden: [{test: 'test', abc: 'def'}, {test: 'def', abc: 'test'}], dob: '', job: 'architect'};
    this.value = null;
  }

  submit(value: any) {
  }
}
