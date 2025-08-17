import { inject } from "@angular/core";
import { filter, map, MonoTypeOperatorFunction, pipe, withLatestFrom } from "rxjs";
import { AuthService } from "../../services/auth.service";

/**
 * Allows a source observable to proceed only if the
 * user is currently authorized/authenticated.
 * @param authService The _AuthService_ instance. This
 * is optional, but it can specified if the operator is used
 * outside of an injection context.
 * @returns
 */
export function isAuthorized<T>(
  authService = inject(AuthService)
) : MonoTypeOperatorFunction<T> {
  return pipe(
    withLatestFrom(authService.isAuth$),
    filter(([, isAuthorized]) => isAuthorized),
    map(([value]) => value)
  );
}