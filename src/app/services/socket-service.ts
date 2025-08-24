import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HmrsNotification } from '../infrastructure/types/notification';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  // Simulated push of notifications since we don't have
  // a real web socket.
  notifications$ : Observable<HmrsNotification[]> =
    of([{
      id: 1,
      title: 'Welcome!',
      message: 'Welcome message',
      type: 'Other',
      read: false,
      date: '2025-08-04'
    }, {
      id: 2,
      title: 'Time off',
      message: 'Time off request',
      type: 'TimeOff',
      read: false,
      date: '2025-08-04'
    }]);
}
