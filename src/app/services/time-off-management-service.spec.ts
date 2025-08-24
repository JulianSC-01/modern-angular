import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { TimeOffManagementService } from './time-off-management-service';

describe('TimeOffManagementService', () => {
  let service: TimeOffManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(TimeOffManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
