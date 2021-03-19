import {BaseElementComponent} from './base-element.component';
import {FieldSelect} from '../model/form/control/field-select';
import {tap} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Option} from '../model/common/option';
import {Validators} from '@angular/forms';

@Component({template: ''})
export class BaseSelectComponent<T extends FieldSelect> extends BaseElementComponent<T> implements OnInit, OnDestroy {
  loadedOptions$: Observable<Option[]>;
  subs: Array<Subscription> = [];

  ngOnInit() {
    this.loadedOptions$ = this.field.options(...this.optionParameters);
    this.dependencyControls.forEach((control) => {
      this.subs.push(control.valueChanges.subscribe((value) => {
        this.loadedOptions$ = this.field.options(...this.optionParameters);
      }));
    });
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  get options() {
    return this.loadedOptions$.pipe(
      tap(options => {
        if (this.control.value && options.findIndex((option) => option.value === this.control.value) === -1) {
          this.control.patchValue(null);
        }
      })
    );
  }

  get optionParameters() {
    return this.dependencyControls.map(control => control.value);
  }

  get required() {
    return this.field.validations.find((validation) => validation.validator === Validators.required) !== undefined;
  }
}
