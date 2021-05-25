import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ShowcaseConfig} from '../shared-forms/model/showcase-config';
import {REGISTRATION_SHOWCASE} from '../shared-forms/model/registration-form';
import {ORDER_CONIFG} from '../shared-forms/model/order-form';
import {LOGIN_SHOWCASE} from '../shared-forms/model/login-form';

@Component({
  selector: 'app-clarity',
  templateUrl: './clarity.component.html',
  styleUrls: ['./clarity.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClarityComponent implements OnInit {
  form: FormGroup;
  registrationConfig: ShowcaseConfig = REGISTRATION_SHOWCASE;
  orderConfig: ShowcaseConfig = ORDER_CONIFG;
  loginConfig: ShowcaseConfig = LOGIN_SHOWCASE;

  currentConfig: ShowcaseConfig = this.loginConfig;

  public value;

  constructor() {}

  ngOnInit(): void {
    this.value = null;
  }

  submit(value: any) {
  }
}
