import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public constants = inject(Constants);

  protected readonly title = signal('hrms');

  /**
  private readonly count = signal(0);
  private count$ = toObservable(this.count);
   *
   * Use to test the toObservable() function to convert a signal
   * to an observable. The observable will emit the latest value
   * asyncronously.
   *
  constructor() {
    this.count$.subscribe(count => console.log(count));
    setInterval(() => this.count.update(count => count + 1), 1000);
  }
  */

  /**
   * Use to test the log() MonoTypeOperator function
   * located in the shared/operators folder.
  ngOnInit(): void {
    of(1, 2, 3).pipe(log('Message')).subscribe();
  }
  */
}
