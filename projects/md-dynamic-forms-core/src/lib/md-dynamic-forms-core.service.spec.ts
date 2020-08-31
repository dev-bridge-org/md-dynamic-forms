import { TestBed } from '@angular/core/testing';

import { MdDynamicFormsCoreService } from './md-dynamic-forms-core.service';

describe('MdDynamicFormsCoreService', () => {
  let service: MdDynamicFormsCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdDynamicFormsCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
