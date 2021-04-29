import {
  FieldArray,
  FieldButton,
  FieldCheckbox,
  FieldGroup,
  FieldInput,
  FieldRadio,
  FieldSelect,
  FieldTable,
  FieldTextarea
} from 'md-dynamic-forms-core';
import {of} from 'rxjs';
import {Validators} from '@angular/forms';

export const ORDER_FORM = new FieldGroup({
  name: 'order',
  children: [
    new FieldTable({
      name: 'items',
      listItem: new FieldGroup({
        name: 'orderItem',
        children: [
          new FieldSelect({
            name: 'item',
            options: () => of([{value: 'Laptop', label: 'Laptop'}]),
            label: 'Item'
          }),
          new FieldButton({
            name: 'submit',
            label: 'Add to List'
          })
        ]
      }),
      config: {width: 85},
      columns: [{name: 'item', width: 100, heading: 'Selected Item'}]
    }),
    new FieldRadio({
      name: 'payment',
      label: 'Payment-Method',
      options: () => of([
        {value: 'paypal', label: 'PayPal'},
        {value: 'creditCard', label: 'CreditCard'},
        {value: 'paysafecard', label: 'Paysafecard'},
      ])
    }),
    new FieldGroup({
      name: 'adress',
      children: [
        new FieldInput({name: 'postalCode', label: 'Postal Code', hint: 'Enter a postal code'}),
        new FieldInput({name: 'city', label: 'City'}),
        new FieldInput({name: 'street', label: 'Street'}),
        new FieldInput({name: 'housenumber', label: 'Housenumber'}),
      ]
    }),
    new FieldButton({
      label: 'Place order',
      name: 'test'
    })
  ]
});

export const YOUR_MODEL = new FieldGroup({
  name: 'nameOfYourForm',
  children: [
    new FieldTextarea({
      name: 'description',
      label: 'Description',
      hint: '', // optional
      maxLength: 2000, // optional
      validations: [], // optional
      asyncValidations: [], // optional
      readonly: false, // optional
      id: 'description' // optional
    })
  ]
});
