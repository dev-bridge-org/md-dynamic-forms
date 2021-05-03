# MdDynamicFormsMaterial
This is the provided implementation of `md-dynamic-forms-core` for the `@clr/angular` library.
It provides functionality for creating dynamic-forms in Angular with Clarity as your design-system.

## Installation
```bash
npm install md-dynamic-forms-core md-dynamic-forms-clarity
```

## Setup
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
    MdDynamicFormsClarityModule
  ]
})
export class AppModule {
}
```
