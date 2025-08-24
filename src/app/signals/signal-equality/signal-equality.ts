import { Component, computed, effect, signal, untracked } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, of } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-signal-equality',
  templateUrl: './signal-equality.html'
})
export class SignalEquality {
  user = signal({
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    age: 20
  }, {
    // The equal function will determine if a newly
    // updated signal's value is different from the
    // previous one.
    equal: (previous, current) => {
      return previous.id === current.id;
    }
  });

  // Set the requireSync to true if you know the
  // observable will emit syncronously.
  syncronousSignal =
    toSignal(of(1, 2, 3), { requireSync: true });

  dateTime = toSignal(
    interval(5000).pipe(
      takeUntilDestroyed(),
      map(() => new Date())), {
        initialValue: new Date()
      });

  fullName = computed(() => {
    const fullName =
      `${this.user().firstName} ${this.user().lastName}`;
    // The untracked function will return a signal's value,
    // but not cause the computed signal to re-evaluate. This
    // can also be implemented as an untracked callback function.
    // Example: untracked(() => { ... })
    const lastModified =
      untracked(this.dateTime);
    // The computed signal will only re-evaluate when the fullName
    // changes, as it reads the user() signal.
    return `${fullName}, last modified at ${lastModified}`;
  });

  constructor() {
    //console.log(this.syncronousSignal());

    effect((onCleanup) => {
      localStorage.setItem('fullName', this.fullName());

      onCleanup(() => {
        // This cleanup function runs after the next execution of
        // the effect, or when the effect is destroyed. (i.e If the
        // component is destroyed)
        localStorage.clear();
      })
    })
  }

  changeUser() {
    // This code will not trigger the computed signal to re-evaluate
    // itself, however it will re-evaluate if the equality function is
    // removed.
    this.user.update(value => ({
      ...value, id: 2, firstName: 'Julian', age: 20
    }));
  }
}
