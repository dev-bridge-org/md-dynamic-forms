import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDynamicFormsComponent } from './md-dynamic-forms.component';

describe('MdDynamicFormsComponent', () => {
  let component: MdDynamicFormsComponent;
  let fixture: ComponentFixture<MdDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
