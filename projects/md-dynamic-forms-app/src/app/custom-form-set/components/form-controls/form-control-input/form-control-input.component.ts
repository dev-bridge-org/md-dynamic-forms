import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.css']
})
export class FormControlInputComponent implements OnInit {
  @Input() public group: FormGroup;
  @Input() public controlname: string;
  @Input() public label: string;
  @Input() public type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
