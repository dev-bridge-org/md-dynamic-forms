import {FieldButton, FieldGroup, FieldInput, FieldRadio, FieldSelect, FieldTable} from 'md-dynamic-forms-core';
import {of} from 'rxjs';
import {Validators} from '@angular/forms';
import {ShowcaseConfig} from './showcase-config';


const PRODUCTS = [
  {value: 'laptop', label: 'Laptop'},
  {value: 'pc', label: 'PC'},
  {value: 'ramStick', label: 'RAM-Stick'},
  {value: 'graphicsCard', label: 'Graphics Card'}
];
const PAYMENT_METHODS = [
  {value: 'paypal', label: 'PayPal'},
  {value: 'creditCard', label: 'CreditCard'},
  {value: 'paysafecard', label: 'Paysafecard'},
];

const ORDER_FORM = new FieldGroup({
  name: 'order',
  children: [
    new FieldTable({
      name: 'items',
      listItem: new FieldGroup({
        name: 'orderItem',
        children: [
          new FieldSelect({
            name: 'product',
            options: () => of(PRODUCTS),
            label: 'Item',
            validations: [
              {name: 'required', message: 'Field is required', validator: Validators.required}
            ]
          }),
          new FieldButton({
            name: 'submit',
            label: 'Add to List'
          })
        ]
      }),
      config: {width: 85},
      columns: [{name: 'product', width: 100, heading: 'Selected Item'}]
    }),
    new FieldRadio({
      name: 'payment',
      label: 'Payment-Method',
      options: () => of(PAYMENT_METHODS),
      validations: [
        {name: 'required', message: 'Field is required', validator: Validators.required}
      ]
    }),
    new FieldGroup({
      name: 'adress',
      children: [
        new FieldInput({
          name: 'postalCode',
          label: 'Postal Code',
          hint: 'Enter a postal code',
          validations: [
            {name: 'required', message: 'Field is required', validator: Validators.required}
          ]
        }),
        new FieldInput({
          name: 'city',
          label: 'City',
          validations: [
            {name: 'required', message: 'Field is required', validator: Validators.required}
          ]
        }),
        new FieldInput({
          name: 'street',
          label: 'Street',
          validations: [
            {name: 'required', message: 'Field is required', validator: Validators.required}
          ]
        }),
        new FieldInput({
          name: 'housenumber',
          label: 'Housenumber'
        }),
      ]
    }),
    new FieldButton({
      label: 'Place order',
      name: 'test'
    })
  ]
});
export const ORDER_CONIFG: ShowcaseConfig = {heading: 'Order Form', form: ORDER_FORM};
