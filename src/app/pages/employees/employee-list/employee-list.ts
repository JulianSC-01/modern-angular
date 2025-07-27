import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  imports: [AsyncPipe, NgComponentOutlet],
  selector: 'app-employee-list',
  templateUrl: './employee-list.html'
})
export class EmployeeList implements OnInit {
  employees$? : Observable<Object>;
  confirmDialog?: any;

  protected readonly isConfirmationDialogOpen =
    signal<boolean>(false);

  constructor(
    private readonly employeeService: EmployeeService) {
  }

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