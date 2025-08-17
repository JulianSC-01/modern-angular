import { MonoTypeOperatorFunction, pipe, tap } from "rxjs";

export function log<T>(message: string = '') : MonoTypeOperatorFunction<T> {
  return pipe(tap(item => console.log(`${message ? message + ': ': ''}${item}`)));
}