# MdDynamicForms


[![Build Status](https://travis-ci.com/officialMKL/md-dynamic-forms.svg?branch=master)](https://travis-ci.com/officialMKL/md-dynamic-forms)
[![Downloads](https://img.shields.io/npm/dm/md-dynamic-forms-core.svg)](https://npmjs.com/package/md-dynamic-forms-core)

MdDynamicForms is a form automation library to create forms in a declarative way.
It's fast and easy to use and comes with built-in components to get started right away.
You get the form as model and as template created from one configuration.

The idea is based off of the [**official Angular guide**](https://angular.io/guide/dynamic-form)

To see a live-demo with different sample-forms click [**here**](http://md-dynamic-forms-app.officialmkl.cloud.okteto.net/) (if the app is in sleeping mode then refresh after a few seconds)

## Table of Contents
- [MdDynamicForms](#mddynamicforms)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [State of Model/Components](#state-of-modelcomponents)
    - [Controls](#controls)
    - [Group](#group)
    - [Array](#array)
    - [Legend](#legend)
  - [What is possible?](#what-is-possible)

## Getting Started

**1. Install the core package**
```bash
npm i md-dynamic-forms-core
```

**2. Install a UI-Library of your choice**
```bash
npm i md-dynamic-forms-<lib-name>
```

**3. Import the modules**
```typescript
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsMaterialModule} from 'md-dynamic-forms-material';

@NgModule({
  imports: [
    MdDynamicFormsCoreModule,
    MdDynamicFormsMaterialModule
  ]
})
export class AppModule { }
```
**4. Create your Model**
```typescript
export const YOUR_MODEL = new FieldGroup({
  name: 'nameOfYourForm',
  children: [
    new FieldInput({
      name: 'nameOfYourControl',
      label: 'LabelOfControl'
    })
  ]
});
```
**5. Import into component and use**
```typescript
export class FormWrapperComponent implements OnInit {
  config: FieldGroup = YOUR_MODEL;
  form: FormGroup;
  initialValue = null;
  constructor() { }

  ngOnInit(): void {
  }

  submit(formValue: any) {
    // Do your submit logic
  }
}
```
```html
<md-dynamic-forms-core [config]="config"
                       [value]="initialValue"
                       (submit)="submit($event)"
                       (formChange)="form = $event">
</md-dynamic-forms-core>
```

## State of Model/Components

### Controls
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| Checkbox       	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Colorpicker    	|:x:|:x:|:x:|:x:|
| Currency      	|:x:|:x:|:x:|:x:|
| Datepicker     	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Editor         	|:x:|:x:|:x:|:x:|
| File Upload    	|:heavy_check_mark:|:x:|:x:|:x:|
| Input          	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| MultiInput     	|:heavy_check_mark:|:x:|:x:|:x:|
| Radio Group    	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Rating         	|:x:|:x:|:x:|:x:|
| Select         	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Slider         	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Switch         	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| Textarea       	|:heavy_check_mark:|:x:|:heavy_check_mark:|:x:|
| Timepicker     	|:x:|:x:|:x:|:x:|
| Toggle        	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| DecisionToggle 	|:x:|:x:|:x:|:x:|

### Group
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| BaseGroup      	|:heavy_check_mark:|:x:|:heavy_check_mark:|:soon:|
| LayoutGroup   	|:heavy_check_mark:|:x:|:x:|:x:|
| CombineGroup   	|:x:|:x:|:x:|:x:|

### Array
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| List          	|:heavy_check_mark:|:x:|:x:|:x:|
| Table         	|:heavy_check_mark:|:x:|:heavy_check_mark:|:x:|
| GroupedTable   	|:x:|:x:|:x:|:x:|
| CheckboxGroup 	|:x:|:x:|:x:|:x:|
| MultiToggle 	|:x:|:x:|:x:|:x:|

### Legend
* :heavy_check_mark: implemented
* :x: not implemented
* :soon: work in progress
* :arrows_counterclockwise: adjustment coming

## What is possible?

### Controls
So controls are single-elements that represent a value in the form. You can create different types of controls by using differnt field-classes

**FieldInput**
```typescript
new FieldInput({
  name: 'firstname',
  label: 'Firstname',
  hint: 'enter your firstname', // optional
  inputType: 'text', // optional
  maxLength: 255, // optional
  validations: [], // optional,
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'firstname' // optional
})
```
**FieldTextarea**
```typescript
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
```
**FieldSelect**
```typescript
new FieldSelect({
  name: 'product',
  label: 'Product',
  options: () => of([{value: '1234-4121', label: 'Laptop'}]),
  hint: 'Choose your product', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'product' // optional
});
```
**FieldDatepicker**
```typescript
new FieldDatepicker({
  name: 'birthdate',
  label: 'Date of birth',
  hint: 'Choose your birthdate', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'birthdate' // optional
});
```
**FieldCheckbox**
```typescript
new FieldCheckbox({
  name: 'expressShipping',
  label: 'Express-Shipping?',
  hint: '', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'expressShipping' // optional
});
```
**FieldRadio**
```typescript
new FieldRadio({
  name: 'paymentMethod',
  label: 'Payment-Method',
  options: () => of([]),
  hint: 'Choose your payment', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'payment_method' // optional
});
```
**FieldToggle**
```typescript
new FieldToggle({
  name: 'paymentMethod',
  label: 'Payment-Method',
  options: () => of([]),
  hint: 'Choose your payment', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'payment_method' // optional
});
```
**FieldSwitch**
```typescript
new FieldSwitch({
  name: 'lightSwitch',
  label: 'Light-Switch',
  hint: '', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'light_switch' // optional
});
```
**FieldSlider**
```typescript
new FieldSlider({
  name: 'volume',
  label: 'Volume',
  min: 0,
  max: 100,
  step: 1,
  withThumbLabel: true,
  hint: '', // optional
  validations: [], // optional
  asyncValidations: [], // optional
  readonly: false, // optional
  id: 'volume' // optional
});
```
### Groups
So groups contain multiple controls, groups or arrays to have them all together. Currently there is only one Group implmented but there are more to come.

**FieldGroup**
```typescript
new FieldGroup({
  name: 'adress',
  children: [], // more groups or fields
  validations: [], // optional
  asyncValidations: [], // optional
  id: 'adress', // optional
  readonly: false // optional
});
```
### Arrays
Arrays are configuring lists so you can display or edit multiple Values of a type of group or control

**FieldTable**
```typescript
new FieldTable({
  name: 'adress',
  listItem: new FieldGroup({}), // more groups or fields
  config: {width: 100, countActive: false},
  columns: [{name: '', heading: '', width: 0, sortable: false}],
  validations: [], // optional
  asyncValidations: [], // optional
  id: 'adress', // optional
  readonly: false // optional
});
```

### Validations
You can configure multiple validations per field and also asynchronous validations to validate through a backend.
One validation-configuration consists of the following fields
```typescript
interface Validator {
  name: string;
  validator: ValidatorFn;
  message: string;
}
interface AsyncValidator {
  name: string;
  validator: AsyncValidatorFn;
  message: string;
}
```
with that you can create validations for your formular to provide better quality and user-experience.
here is a example
```typescript
new FieldSelect({
  name: 'product',
  options: () => of(PRODUCTS),
  label: 'Item',
  validations: [
    {name: 'required', message: 'Field is required', validator: Validators.required}
  ]
})
```
