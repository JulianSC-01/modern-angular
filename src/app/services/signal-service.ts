import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
    // Exposing a readonly signal to the outside world. Only
    // the service can modify the signal. The readonly signal
    // will always contain the latest value and be available to
    // consumers.
    readonly #data = signal<number>(1);
    readonly data = this.#data.asReadonly();
}