import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig, MdDynamicFormsService} from 'md-dynamic-forms';

@Component({
  selector: 'app-custom-form-set',
  templateUrl: './custom-form-set.component.html',
  styleUrls: ['./custom-form-set.component.css']
})
export class CustomFormSetComponent implements OnInit {
  public group: FormGroup;
  public field: FieldConfig = {
    name: 'form',
    type: 'form',
    formType: 'group',
    children: [
      {
        name: 'test',
        type: 'form-group-view',
        formType: 'group',
        children: [
          {name: 'testControl', type: 'input', formType: 'control', children: []}
        ]
      }
    ]
  };

  constructor(private dynamicFormsService: MdDynamicFormsService) { }

  ngOnInit(): void {
    this.group = this.dynamicFormsService.createGroup(this.field, null);
  }

}
