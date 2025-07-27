import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('Employee', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeService,
        provideHttpClient()
      ]
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
