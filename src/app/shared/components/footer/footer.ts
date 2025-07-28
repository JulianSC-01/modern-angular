import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isAuth } from '../../functions/isAuth';

@Component({
  imports: [
    AsyncPipe,
    RouterLink
  ],
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  isAuth$ = isAuth();
}