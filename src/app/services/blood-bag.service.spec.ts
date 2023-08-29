import { TestBed } from '@angular/core/testing';

import { BloodBagService } from './blood-bag.service';

describe('BloodBagService', () => {
  let service: BloodBagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodBagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
