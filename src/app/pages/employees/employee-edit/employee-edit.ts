import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { PermissionsService } from '../../../services/permissions-service';

type EmployeeForm = {
  firstName : FormControl<string>;
  lastName : FormControl<string>;
  email: FormControl<string>;
  position: FormControl<string>;
  level: FormControl<string>;
}

@Component({
  imports: [],
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.html'
})
export class EmployeeEdit implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(NonNullableFormBuilder);
  permissionsService = inject(PermissionsService);

  form : FormGroup<EmployeeForm>;

  constructor() {
    this.form = this.formBuilder.group<EmployeeForm>({
      firstName: this.formBuilder.
        control('', { validators: Validators.required }),
      lastName: this.formBuilder.
        control(''),
      email: this.formBuilder.
        control('', { validators: Validators.email }),
      position: this.formBuilder.
        control(''),
      level: this.formBuilder.
        control(''),
    });
  }

  ngOnInit(): void {
    // Passing DestroyRef to the takeUntilDestroyed()
    // operator function, as the ngOnInit() method is
    // outside of an injection context.
    // If this was done in the constructor, the destroyRef
    // would not be required.
    this.permissionsService.
      hasPermission('EditEmployeePrivateDetails').pipe(
        takeUntilDestroyed(this.destroyRef)).
        subscribe(hasPermission => {
          if (!hasPermission) {
            this.form.controls.firstName.disable();
            this.form.controls.lastName.disable();
            this.form.controls.email.disable();
          } else {
            this.form.controls.firstName.enable();
            this.form.controls.lastName.enable();
            this.form.controls.email.enable();
          }
        });
  }
}
