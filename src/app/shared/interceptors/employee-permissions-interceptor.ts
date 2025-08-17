import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { hasPermissions } from "../operators/hasPermissions";

export const employeePermissionsInterceptor: HttpInterceptorFn =
  (req : HttpRequest<any>, next: HttpHandlerFn) => {
  return next(req).pipe(
    hasPermissions([
      'ViewEmployees',
      'CreateEmployee',
      'DeleteEmployee',
      'EditEmployeeGeneralDetails']));
};