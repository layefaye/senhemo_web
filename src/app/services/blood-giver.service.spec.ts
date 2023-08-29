import { TestBed } from '@angular/core/testing';

import { BloodGiverService } from './blood-giver.service';

describe('BloodGiverService', () => {
  let service: BloodGiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodGiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
