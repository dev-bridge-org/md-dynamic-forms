import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWidgetComponent } from './form-field-widget.component';

describe('FormFieldWidgetComponent', () => {
  let component: FormFieldWidgetComponent;
  let fixture: ComponentFixture<FormFieldWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
