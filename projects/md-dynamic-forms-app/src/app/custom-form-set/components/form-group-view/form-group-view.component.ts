import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from 'md-dynamic-forms';

@Component({
  selector: 'app-form-group-view',
  templateUrl: './form-group-view.component.html',
  styleUrls: ['./form-group-view.component.css']
})
export class FormGroupViewComponent implements OnInit {
  @Input() public group: FormGroup;
  @Input() public field: FieldConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
