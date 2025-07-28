import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public constants = inject(Constants);

  protected readonly title = signal('hrms');
}
