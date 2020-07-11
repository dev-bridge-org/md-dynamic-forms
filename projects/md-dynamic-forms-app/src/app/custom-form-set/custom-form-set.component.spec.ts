import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormSetComponent } from './custom-form-set.component';

describe('CustomFormSetComponent', () => {
  let component: CustomFormSetComponent;
  let fixture: ComponentFixture<CustomFormSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
