import {Component, Input, OnInit} from '@angular/core';
import {FieldGroup} from 'md-dynamic-forms-core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {
  @Input() config: FieldGroup;
  @Input() initialValue: unknown;
  @Input() title = '';

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  submit(value: any) {
    console.log('Test');
  }

}
