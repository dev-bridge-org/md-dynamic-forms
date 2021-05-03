# MdDynamicFormsCore
Core package of `md-dynamic-forms`. It provides the base-functionality for creating dynamic-forms in Angular.

You can choose a prepared preset to start creating forms directly by choosing one of the libraries for a design-system.
Currently there is only 1 system available.

* md-dynamic-forms-material

## Installation
```bash
npm install md-dynamic-forms-core
```
And if you choose a provided library then also the following
```bash
npm install md-dynamic-forms-<LIB-NAME>
```

## Setup (with provided Library)
This setup is created with `@angular/material` as an example
If you want to see how to create your form please go to the [documentation](https://github.com/officialMKL/md-dynamic-forms).
There you can find all currently existing examples.

```typescript
import {ReactiveFormsModule} from '@angular/forms';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsMaterialModule} from 'md-dynamic-forms-material';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MdDynamicFormsCoreModule,
    MdDynamicFormsMaterialModule
  ]
})
export class AppModule {
}
```

## Setup (with Customization)
here you can see how to create a custom component-set

```typescript
import {ReactiveFormsModule} from '@angular/forms';
import {MdDynamicFormsCoreModule, COMPONENT_SET} from 'md-dynamic-forms-core';
import {STANDARD_COMPONENT_SET} from 'path/to/your/set';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MdDynamicFormsCoreModule
  ],
  providers: [
    {provide: COMPONENT_SET, useValue: STANDARD_COMPONENT_SET}
  ]
})
export class AppModule {
}
```

You need to create a custom-set if you choose none of the provided libraries. Here is a list of components that can be available for you to choose.
You don't need to create a component for every type but for those that you need for your forms.

```typescript
export const STANDARD_COMPONENT_SET = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  toggle: ToggleComponent,
  datepicker: DatepickerComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  group: GroupComponent,
  list: ListComponent,
  table: TableComponent,
  textarea: TextareaComponent,
  slider: SliderComponent,
  switch: SwitchComponent
};
```

This library can always be extended as you wish. So you can have the components mentioned or add more components that you need.
A Example on how to extend the library will come soon.
