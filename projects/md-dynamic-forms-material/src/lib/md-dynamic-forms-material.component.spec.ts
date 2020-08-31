import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDynamicFormsMaterialComponent } from './md-dynamic-forms-material.component';

describe('MdDynamicFormsMaterialComponent', () => {
  let component: MdDynamicFormsMaterialComponent;
  let fixture: ComponentFixture<MdDynamicFormsMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDynamicFormsMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDynamicFormsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
