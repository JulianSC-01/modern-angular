import { inject } from "@angular/core";
import { CanActivateFn, RedirectCommand, Router } from "@angular/router";
import { map } from "rxjs";
import { isAuth } from "../functions/isAuth";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  return isAuth().pipe(map((isAuth) =>
    isAuth || new RedirectCommand(router.parseUrl('/login'))));
}