import { TestBed } from '@angular/core/testing';

import { BloodGiverHelpersService } from './blood-giver-helpers.service';

describe('BloodGiverHelpersService', () => {
  let service: BloodGiverHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodGiverHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
