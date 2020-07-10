import { TestBed } from '@angular/core/testing';

import { MdDynamicFormsService } from './md-dynamic-forms.service';

describe('MdDynamicFormsService', () => {
  let service: MdDynamicFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdDynamicFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
