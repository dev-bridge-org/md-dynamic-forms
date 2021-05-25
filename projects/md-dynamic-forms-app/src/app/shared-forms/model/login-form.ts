import {ShowcaseConfig} from './showcase-config';
import {FieldGroup, FieldInput} from 'md-dynamic-forms-core';
import {Validators} from '@angular/forms';

const LOGIN_FORM = new FieldGroup({
  name: 'login',
  children: [
    new FieldInput({
      name: 'user',
      label: 'Username',
      hint: 'Enter your username',
      validations: [
        {name: 'required', message: 'Field is required', validator: Validators.required}
      ]
    })
  ]
});

export const LOGIN_SHOWCASE: ShowcaseConfig = {heading: 'Login-Form', form: LOGIN_FORM};
