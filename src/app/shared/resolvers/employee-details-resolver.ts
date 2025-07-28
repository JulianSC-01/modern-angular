import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Employee } from '../../infrastructure/types/employee';
import { EmployeeService } from '../../services/employee.service';

export const employeeDetailsResolver: ResolveFn<Employee> =
  (route : ActivatedRouteSnapshot) => {
  const employeeService = inject(EmployeeService);
  const id = Number(route.paramMap.get('id')) ?? 0;

  return employeeService.getEmployee(id);
};
