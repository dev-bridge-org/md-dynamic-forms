import {BaseElement} from './base-element';
import {FieldSelect} from '../model/form/control/field-select';
import {tap} from 'rxjs/operators';
import {OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

export abstract class BaseSelect extends BaseElement<FieldSelect> implements OnInit, OnDestroy {
  loadedOptions$: Observable<any[]>;
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
        if (this.control.value && options.indexOf(this.control.value) === -1) {
          this.control.patchValue(null);
        }
      })
    );
  }

  get optionParameters() {
    return this.dependencyControls.map(control => control.value);
  }
}
