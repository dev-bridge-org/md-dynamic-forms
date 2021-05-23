import { Component, OnInit } from '@angular/core';
import {BaseInputComponent, FieldInput} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-input',
  templateUrl: './clarity-input.component.html',
  styleUrls: ['./clarity-input.component.css']
})
export class ClarityInputComponent extends BaseInputComponent<FieldInput> implements OnInit {
  ngOnInit(): void {
  }
}
