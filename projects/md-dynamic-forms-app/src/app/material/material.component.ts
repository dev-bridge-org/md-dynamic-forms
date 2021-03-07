import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FieldDatepicker, FieldGroup, FieldInput} from 'md-dynamic-forms-core';

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
    ]
  });

  public value;

  constructor() {}

  ngOnInit(): void {
    this.value = {name: '', adress: {}, kunden: [{test: 'test', abc: 'def'}, {test: 'def', abc: 'test'}], dob: ''};
  }

  submit(value: any) {
  }
}
