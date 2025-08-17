import { inject } from "@angular/core";
import { filter, map, MonoTypeOperatorFunction, pipe, withLatestFrom } from "rxjs";
import { HrmsPermissions, PermissionsService } from "../../services/permissions-service";

/**
 * Allows a source observable to proceed only if the
 * user has the specified permissions.
 * @param permissions The permissions to check.
 * @param permissionsService The _PermissionService_ instance. This
 * is optional, but it can specified if the operator is used outside of
 * an injection context.
 * @returns
 */
export function hasPermissions<T>(
  permissions: HrmsPermissions[],
  permissionsService = inject(PermissionsService)
) : MonoTypeOperatorFunction<T> {
  return pipe(
    withLatestFrom(permissionsService.hasPermissions(permissions)),
    filter(([, hasPermission]) => hasPermission),
    map(([value]) => value)
  );
}