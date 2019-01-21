import { TestBed } from '@angular/core/testing';

import { BatchserviceService } from './batchservice.service';

describe('BatchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchserviceService = TestBed.get(BatchserviceService);
    expect(service).toBeTruthy();
  });
});
