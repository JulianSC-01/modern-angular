import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly http: HttpClient) {
  }

  getEmployees() {
    return this.http.get('/api/employees');
  }
}