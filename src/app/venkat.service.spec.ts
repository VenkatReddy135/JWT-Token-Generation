import { TestBed } from '@angular/core/testing';

import { VenkatService } from './venkat.service';

describe('VenkatService', () => {
  let service: VenkatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenkatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
