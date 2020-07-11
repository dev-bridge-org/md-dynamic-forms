import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from 'md-dynamic-forms';

@Component({
  selector: 'app-form-field-widget',
  templateUrl: './form-field-widget.component.html',
  styleUrls: ['./form-field-widget.component.scss']
})
export class FormFieldWidgetComponent implements OnInit {
  @Input() public group: FormGroup;
  @Input() public field: FieldConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
