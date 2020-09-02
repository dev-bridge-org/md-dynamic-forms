import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldGroup, FieldInput, MdDynamicFormsCoreService} from 'md-dynamic-forms-core';

@Component({
  selector: 'app-custom-form-set',
  templateUrl: './custom-form-set.component.html',
  styleUrls: ['./custom-form-set.component.css']
})
export class CustomFormSetComponent implements OnInit {
  public group: FormGroup;
  public field: FieldGroup = new FieldGroup({
    name: 'form',
    children: [
      new FieldGroup({
        name: 'test',
        component: 'form-group-view',
        children: [
          new FieldInput({name: 'testControl', inputType: 'text'})
        ]
      })
    ]
  });

  constructor(private dynamicFormsService: MdDynamicFormsCoreService) { }

  ngOnInit(): void {
    this.group = this.dynamicFormsService.createGroup(this.field, null);
  }

}
