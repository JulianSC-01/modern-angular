import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl, NonNullableFormBuilder, PristineChangeEvent, ReactiveFormsModule,
  StatusChangeEvent, TouchedChangeEvent, Validators, ValueChangeEvent
} from '@angular/forms';
import { Employee } from '../../../infrastructure/types/employee';
import { EmployeeService } from '../../../services/employee.service';

type EmployeeForm = {
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  email: FormControl<string>,
  position: FormControl<string>,
  level: FormControl<string>
}

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-employee-create',
  templateUrl: './employee-create.html'
})
export class EmployeeCreate {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly employeeService = inject(EmployeeService);

  form = this.formBuilder.group<EmployeeForm>({
    firstName: this.formBuilder.control('', {
      validators: [Validators.required]
    }),
    lastName: this.formBuilder.control('', {
      validators: [Validators.required]
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required]
    }),
    position: this.formBuilder.control('', {
      validators: [Validators.required]
    }),
    level: this.formBuilder.control('', {
      validators: [Validators.required]
    })
  });

  constructor() {
    // "events" will emit when the value, status,
    // pristine or touched changes.
    this.form.events.pipe(
      takeUntilDestroyed()).subscribe(event => {
        if (event instanceof StatusChangeEvent) {
          console.log(event.status);
        } else if (event instanceof ValueChangeEvent) {
          console.log(event.value);
        } else if (event instanceof PristineChangeEvent) {
          console.log(event.pristine);
        } else if (event instanceof TouchedChangeEvent) {
          console.log(event.touched);
        }
      });
  }

  submit() : void {
    if (this.form.valid) {
      const employee = this.form.value as Employee;
      this.employeeService.createEmployee(employee);
    }
  }
}
