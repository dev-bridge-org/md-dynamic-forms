import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';
import {TestService} from './test.service';
import {of} from 'rxjs';
import {filter, flatMap, toArray} from 'rxjs/operators';
import {FieldCheckbox, FieldDatepicker, FieldGroup, FieldInput, FieldRadio, FieldSelect, FieldTable} from 'md-dynamic-forms-core';

class Stammdaten {
  id: number;
  bezeichnung: string;

  constructor(init?: Partial<Stammdaten>) {
    Object.assign(this, init);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
  form: FormGroup;
  regConfig: FieldGroup = new FieldGroup({
    name: 'testform',
    validations: [
      // {name: 'test', message: '', validator: CustomValidators.test}
    ],
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
      // new FieldTable({
      //   name: 'kunden',
      //   listItem: new FieldGroup({
      //     children: [
      //       new FieldInput({
      //         name: 'test',
      //         label: 'Test',
      //         inputType: 'text'
      //       }),
      //       new FieldInput({
      //         name: 'abc',
      //         label: 'Abc',
      //         inputType: 'text'
      //       }),
      //     ],
      //     name: 'kunde'
      //   }),
      //   config: {
      //     width: 75,
      //     columns: [
      //       {name: 'test', width: 50, heading: 'Test'},
      //       {name: 'abc', width: 50, heading: 'ABC'}
      //     ]
      //   }
      // }),
      // new FieldGroup({
      //   children: [
      //     new FieldInput({
      //       name: 'street',
      //       inputType: 'text',
      //       label: 'Street',
      //     }),
      //     new FieldInput({
      //       name: 'city',
      //       label: 'City',
      //       inputType: 'text'
      //     }),
      //   ],
      //   name: 'adress'
      // }),
      // new FieldSelect({
      //   name: 'gender',
      //   label: 'Gender',
      //   options: () => of(['Male', 'Female']),
      //   display: (value: string) => of(value),
      //   validations: [
      //     {name: 'required', message: 'Gender is required', validator: Validators.required}
      //   ]
      // }),
      // new FieldSelect({
      //   name: 'creditCardType',
      //   label: 'Art der Kreditkarte',
      //   options: () => of([new Stammdaten({id: 1, bezeichnung: 'Master Card'})]),
      //   display: (value: {id: number, bezeichnung: string}) => of(value.bezeichnung),
      //   validations: [
      //     {name: 'required', message: 'Gender is required', validator: Validators.required}
      //   ]
      // }),
      // new FieldSelect({
      //   name: 'gendering',
      //   label: 'Gendering',
      //   options: (gender: string) => {
      //     return this.service.getGenderingOptions()
      //       .pipe(
      //         flatMap(gendering => gendering),
      //         filter(gendering => gendering !== gender),
      //         toArray()
      //       );
      //   },
      //   display: (value: string) => of(value),
      //   dependencies: ['gender'],
      //   validations: [
      //     {name: 'required', message: 'Gender is required', validator: Validators.required}
      //   ]
      // }),
      // new FieldDatepicker({
      //   name: 'dob',
      //   label: 'DOB',
      //   inputType: 'date',
      //   validations: [
      //     {
      //       name: 'required',
      //       validator: Validators.required,
      //       message: 'Date of Birth Required'
      //     },
      //     {
      //       name: 'test',
      //       validator: null,
      //       message: 'Test Validation'
      //     }
      //   ],
      //   asyncValidations: [
      //     {name: 'asyncTest', validator: CustomValidators.asyncTest(this.service), message: 'ABC'}
      //   ]
      // }),
      // new FieldCheckbox({
      //   name: 'term',
      //   label: 'Accept Terms',
      //   inputType: 'checkbox',
      //   validations: [
      //     {name: 'required', message: 'Terms need to be Accepted', validator: Validators.requiredTrue}
      //   ]
      // }),
      // new FieldRadio({
      //   name: 'favColor',
      //   label: 'Favorite Color',
      //   options: () => of(['Red', 'Green', 'Blue']),
      //   validations: [
      //     {name: 'required', message: 'You must choose your favorite color', validator: Validators.required}
      //   ]
      // })
    ]
  });

  public value;

  constructor(private service: TestService) {}

  ngOnInit(): void {
    this.value = {name: '', adress: {}, kunden: [{test: 'test', abc: 'def'}, {test: 'def', abc: 'test'}], dob: '7/8/2020'};
  }

  submit(value: any) {
  }
}
