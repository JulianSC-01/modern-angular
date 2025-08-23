import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { TimeOffRequestService } from './time-off-request-service';

describe('TimeOffRequestService', () => {
  let service: TimeOffRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(TimeOffRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
