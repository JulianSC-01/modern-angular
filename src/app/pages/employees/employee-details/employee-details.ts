import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../infrastructure/types/employee';

@Component({
  imports: [],
  selector: 'app-employee-details',
  templateUrl: './employee-details.html'
})
export class EmployeeDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  employee? : Employee;

  ngOnInit(): void {
    this.employee = this.activatedRoute.snapshot.data['employee'];
  }
}