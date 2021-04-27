import { Component, OnInit } from '@angular/core';
import {BaseInputComponent} from 'md-dynamic-forms-core';
import {FieldTextarea} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends BaseInputComponent<FieldTextarea> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
