import { NgClass } from '@angular/common';
import { AfterViewInit, Directive, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Directive({
  selector: 'a[routerLink]',
  hostDirectives: [
    NgClass
    // Use the followng syntax if you need to automatically pass
    // inputs to the host directive.
    //{ directive: TooltipDirective, inputs: ['tooltip'] }
  ]
})
export class EmployeeNotAvailable implements AfterViewInit {
  private readonly ngClassRef = inject(NgClass);
  private readonly routerLinkRef = inject(RouterLink);
  private readonly employeeService = inject(EmployeeService);

  ngAfterViewInit(): void {
    if (this.routerLinkRef.href?.
        startsWith('/employees/details')) {
      const employeeId =
        this.routerLinkRef.urlTree?.
          root.children['primary'].segments.at(-1)?.path;

      if (employeeId) {
        this.employeeService.
          getEmployee(Number(employeeId)).
            subscribe(employee => {
            this.ngClassRef.ngClass = {
              'not-available': !employee.isAvailable
            };
          });
      }
    }
  }
}