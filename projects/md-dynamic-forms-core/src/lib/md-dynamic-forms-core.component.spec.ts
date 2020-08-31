import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDynamicFormsCoreComponent } from './md-dynamic-forms-core.component';

describe('MdDynamicFormsCoreComponent', () => {
  let component: MdDynamicFormsCoreComponent;
  let fixture: ComponentFixture<MdDynamicFormsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDynamicFormsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDynamicFormsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
