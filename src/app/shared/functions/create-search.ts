import { DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs";

export function createSearch<T>(
  control: FormControl<T>,
  destroyRef : DestroyRef = inject(DestroyRef)) {
  return control.valueChanges.pipe(
    debounceTime(500),
    takeUntilDestroyed(destroyRef)
  );
}