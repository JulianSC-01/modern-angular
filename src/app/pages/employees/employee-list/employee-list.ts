import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  imports: [
    AsyncPipe,
    NgComponentOutlet
  ],
  selector: 'app-employee-list',
  templateUrl: './employee-list.html'
})
export class EmployeeList implements OnInit {
  private readonly employeeService = inject(EmployeeService);

  employees$? : Observable<Object>;
  confirmDialog?: any;

  protected readonly isConfirmationDialogOpen =
    signal<boolean>(false);

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  async showConfirmationDialog() {
    this.confirmDialog = await import(
      '../../../shared/components/confirmation-dialog/confirmation-dialog').then(
        (m) => m.ConfirmationDialog);
    this.isConfirmationDialogOpen.set(true);
  }
}