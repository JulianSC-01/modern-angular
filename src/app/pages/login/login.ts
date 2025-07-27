import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.html'
})
export class Login {
  protected readonly email = signal<string>('');
  protected readonly password = signal<string>('');
}