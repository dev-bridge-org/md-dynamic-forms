import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityInputComponent } from './clarity-input.component';

describe('ClarityInputComponent', () => {
  let component: ClarityInputComponent;
  let fixture: ComponentFixture<ClarityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
