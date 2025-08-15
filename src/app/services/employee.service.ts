import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../infrastructure/types/employee';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly http: HttpClient) {
  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/employees');
  }

  getEmployee(id : number) : Observable<Employee> {
    return this.http.get<Employee>(`/api/employees/${id}`);
  }

  createEmployee(employee: Employee) {
    console.log(employee);
  }
}