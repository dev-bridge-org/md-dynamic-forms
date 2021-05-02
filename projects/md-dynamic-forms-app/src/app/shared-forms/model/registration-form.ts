import {ShowcaseConfig} from './showcase-config';
import {
  FieldButton,
  FieldCheckbox,
  FieldDatepicker,
  FieldGroup,
  FieldInput,
  FieldRadio,
  FieldSelect, FieldSlider, FieldSwitch, FieldTable,
  FieldTextarea,
  FieldToggle
} from 'md-dynamic-forms-core';
import {Validators} from '@angular/forms';
import {of} from 'rxjs';

const REGISTRATION_FORM = new FieldGroup({
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
    }),
    new FieldTextarea({
      label: 'Description',
      name: 'description',
      validations: [
        {name: 'required', validator: Validators.required, message: 'Description is required'}
      ]
    }),
    new FieldSlider({
      label: 'Volume',
      name: 'volume',
      min: 0,
      max: 100,
      step: 1,
      withThumbLabel: true,
      hint: 'Set your volume'
    }),
    new FieldSwitch({
      name: 'newsletter',
      label: 'Want the newsletter?'
    }),
    new FieldTable({
      name: 'contacts',
      config: {
        width: 100
      },
      columns: [
        {name: 'type', heading: 'Type', width: 50},
        {name: 'value', heading: 'Value', width: 50}
      ],
      listItem: new FieldGroup({
        name: 'contact',
        children: [
          new FieldSelect({
            name: 'type',
            options: () => of([{value: 'email', label: 'E-Mail'}, {value: 'phone', label: 'Phone'}]),
            label: 'Type'
          }),
          new FieldInput({
            name: 'value',
            label: 'Value'
          }),
          new FieldButton({
            name: 'test',
            label: 'Save Contact'
          })
        ]
      })
    })
  ]
});

export const REGISTRATION_SHOWCASE: ShowcaseConfig = {heading: 'Registration Form', form: REGISTRATION_FORM};
