import { NgClass } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeNotAvailable } from './employee-not-available';

describe('EmployeeNotAvailable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgClass,
          useValue: {}
        },
        {
          provide: RouterLink,
          useValue: {}
        },
        EmployeeService,
        provideHttpClient()
      ]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new EmployeeNotAvailable();
      expect(directive).toBeTruthy();
    });
  });
});
