# MdDynamicForms


[![Build Status](https://travis-ci.com/officialMKL/md-dynamic-forms.svg?branch=master)](https://travis-ci.com/officialMKL/md-dynamic-forms)
[![Downloads](https://img.shields.io/npm/dm/md-dynamic-forms-core.svg)](https://npmjs.com/package/md-dynamic-forms-core)

MdDynamicForms is a form automation library to create forms in a declarative way.
It's fast and easy to use and comes with built-in components to get started right away.
You get the form as model and as template created from one configuration.

The idea is based off of the [**official Angular guide**](https://angular.io/guide/dynamic-form)

## Table of Contents
- [MdDynamicForms](#mddynamicforms)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [State of Model/Components](#state-of-modelcomponents)
    - [Controls](#controls)
    - [Group](#group)
    - [Array](#array)
    - [Legend](#legend)

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

## State of Model/Components

### Controls
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| Checkbox       	|:heavy_check_mark:|:x:|:soon:|:x:|
| Colorpicker    	|:x:|:x:|:x:|:x:|
| Currency      	|:x:|:x:|:x:|:x:|
| Datepicker     	|:heavy_check_mark:|:x:|:soon:|:x:|
| Editor         	|:x:|:x:|:x:|:x:|
| File Upload    	|:heavy_check_mark:|:x:|:x:|:x:|
| Input          	|:heavy_check_mark:|:x:|:soon:|:x:|
| MultiInput     	|:heavy_check_mark:|:x:|:x:|:x:|
| Radio Group    	|:heavy_check_mark:|:x:|:soon:|:x:|
| Rating         	|:x:|:x:|:x:|:x:|
| Select         	|:heavy_check_mark:|:x:|:soon:|:x:|
| Slider         	|:x:|:x:|:x:|:x:|
| Switch         	|:x:|:x:|:x:|:x:|
| Textarea       	|:soon:|:x:|:soon:|:x:|
| Timepicker     	|:x:|:x:|:x:|:x:|
| Toggle        	|:soon:|:x:|:soon:|:x:|
| DecisionToggle 	|:soon:|:x:|:soon:|:x:|

### Group
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| BaseGroup      	|:heavy_check_mark:|:x:|:x:|:x:|
| LayoutGroup   	|:heavy_check_mark:|:x:|:x:|:x:|
| CombineGroup   	|:x:|:x:|:x:|:x:|

### Array
|                	|md-dynamic-forms-core|ngx-bootstrap|material|clarity|
|----------------	|:-:|:-:|:-:|:-:|
| List          	|:heavy_check_mark:|:x:|:x:|:x:|
| Table         	|:heavy_check_mark:|:x:|:x:|:x:|
| GroupedTable   	|:x:|:x:|:x:|:x:|
| CheckboxGroup 	|:x:|:x:|:x:|:x:|
| MultiToggle 	|:x:|:x:|:x:|:x:|

### Legend
* :heavy_check_mark: implemented
* :x: not implemented
* :soon: work in progress
* :arrows_counterclockwise: adjustment coming
