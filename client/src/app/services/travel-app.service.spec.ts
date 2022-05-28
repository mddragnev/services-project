import { TestBed } from '@angular/core/testing';

import { TravelAppService } from './travel-app.service';

describe('TravelAppService', () => {
  let service: TravelAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
