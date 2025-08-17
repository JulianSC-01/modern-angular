import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type HrmsPermissions =
  'CreateEmployee' |
  'DeleteEmployee' |
  'ViewEmployees' |
  'EditEmployeeGeneralDetails' |
  'EditEmployeePrivateDetails';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private readonly permissions$ =
    new BehaviorSubject<Partial<Record<HrmsPermissions, boolean>>>({
      ViewEmployees: true
    });

  hasPermission(permission: HrmsPermissions) {
    return this.permissions$.
      pipe(map(currentPermissions =>
        currentPermissions[permission] ?? false));
  }

  hasPermissions(permissions: HrmsPermissions[]) {
    return this.permissions$.
      pipe(map(currentPermissions =>
        permissions.every(permission =>
          currentPermissions[permission] ?? false)));
  }

  setPermissions(permissions: Partial<Record<HrmsPermissions, boolean>>) {
    this.permissions$.
      next({...this.permissions$.getValue(), ...permissions })
  }

  revokePermission(permission: HrmsPermissions) {
    this.permissions$.
      next({...this.permissions$.getValue(), [permission]: false });
  }
}