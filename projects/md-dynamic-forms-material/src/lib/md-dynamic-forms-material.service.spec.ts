import { TestBed } from '@angular/core/testing';

import { MdDynamicFormsMaterialService } from './md-dynamic-forms-material.service';

describe('MdDynamicFormsMaterialService', () => {
  let service: MdDynamicFormsMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdDynamicFormsMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
