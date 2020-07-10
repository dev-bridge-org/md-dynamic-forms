import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Validators} from '@angular/forms';
import {FieldConfig, MdDynamicFormsComponent} from 'md-dynamic-forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(MdDynamicFormsComponent) form: MdDynamicFormsComponent;
  // regConfig: FieldConfig[] = [
  //   {
  //     type: 'input',
  //     label: 'Username',
  //     inputType: 'text',
  //     name: 'name',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'Name Required'
  //       },
  //       {
  //         name: 'pattern',
  //         validator: Validators.pattern('^[a-zA-Z]+$'),
  //         message: 'Accept only text'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'Email Address',
  //     inputType: 'email',
  //     name: 'email',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'Email Required'
  //       },
  //       {
  //         name: 'pattern',
  //         validator: Validators.pattern(
  //           '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
  //         ),
  //         message: 'Invalid email'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'Password',
  //     inputType: 'password',
  //     name: 'password',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'Password Required'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'radiobutton',
  //     label: 'Gender',
  //     name: 'gender',
  //     options: ['Male', 'Female'],
  //     value: 'Male'
  //   },
  //   {
  //     type: 'date',
  //     label: 'DOB',
  //     name: 'dob',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'Date of Birth Required'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'select',
  //     label: 'Country',
  //     name: 'country',
  //     value: 'UK',
  //     options: ['India', 'UAE', 'UK', 'US']
  //   },
  //   {
  //     type: 'checkbox',
  //     label: 'Accept Terms',
  //     name: 'term',
  //     value: true
  //   },
  //   {
  //     type: 'button',
  //     label: 'Save'
  //   }
  // ];
  regConfig: FieldConfig = {
    type: 'form',
    name: 'testform',
    formType: 'form',
    children: [
      {
        type: 'input',
        children: [],
        formType: 'control',
        name: 'name',
        validations: [
          {name: 'required', message: 'Name ist ein Pflichtfeld', validator: Validators.required}
        ]
      },
      {
        type: 'list',
        children: [],
        formType: 'array',
        name: 'kunden',
        listItem: {
          type: 'group',
          formType: 'group',
          children: [
            {
              type: 'input',
              formType: 'control',
              children: [],
              name: 'test',
            },
            {
              type: 'input',
              formType: 'control',
              children: [],
              name: 'abc',
            },
          ],
          name: 'kunde'
        }
      },
      {
        type: 'group',
        formType: 'group',
        children: [
          {
            type: 'input',
            children: [],
            formType: 'control',
            name: 'street'
          },
          {
            type: 'input',
            children: [],
            formType: 'control',
            name: 'city'
          },
        ],
        name: 'adress'
      },
      {
        name: 'gender',
        type: 'select',
        formType: 'control',
        children: [],
        label: 'Gender',
        options: ['Male', 'Female'],
        validations: [
          {name: 'required', message: 'Gender is required', validator: Validators.required}
        ]
      }
    ]
  };

  public value;

  constructor() {}

  ngOnInit(): void {
    this.value = {name: 'Test', adress: {}, kunden: [{test: 'test', abc: 'def'}, {test: 'def', abc: 'test'}]};
  }

  submit(value: any) {
  }
}
