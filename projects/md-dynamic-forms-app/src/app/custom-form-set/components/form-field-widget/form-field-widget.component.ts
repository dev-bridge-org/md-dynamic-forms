import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldInput} from 'md-dynamic-forms';

@Component({
  selector: 'app-form-field-widget',
  templateUrl: './form-field-widget.component.html',
  styleUrls: ['./form-field-widget.component.scss']
})
export class FormFieldWidgetComponent implements OnInit {
  @Input() public group: FormGroup;
  @Input() public field: FieldInput;

  constructor() { }

  ngOnInit(): void {
  }

}
