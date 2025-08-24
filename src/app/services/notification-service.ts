import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HmrsNotification } from '../infrastructure/types/notification';
import { SocketService } from './socket-service';

const NOTIFICATION_STORAGE_KEY = 'notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly socketService = inject(SocketService);

  #notifications = signal<HmrsNotification[]>(
    localStorage.getItem(NOTIFICATION_STORAGE_KEY) ?
      JSON.parse(localStorage.getItem(NOTIFICATION_STORAGE_KEY)!) : []);

  notifications = this.#notifications.asReadonly();

  readNotifications = computed(() =>
    this.#notifications().filter(n => n.read));
  unreadNotifications = computed(() =>
    this.#notifications().filter(n => !n.read));

  constructor() {
    effect(() => {
      localStorage.setItem(
        NOTIFICATION_STORAGE_KEY,
        JSON.stringify(this.#notifications()))
    })
  }

  connect() {
    return this.socketService.notifications$.
      pipe(takeUntilDestroyed()).subscribe(notifications => {
        this.#notifications.set(notifications)
      });
  }

  addNotification(notification : HmrsNotification) {
    this.#notifications.update(value => [...value, notification]);
  }

  markAsRead(notification: HmrsNotification) {
    this.#notifications.update(
      value => value.map(
        n => n.id === notification.id ?
          { ...n, read: true } : n));
  }

  markAllAsRead() {
    this.#notifications.update(
      value => value.map(
        n => ({ ...n, read: true })));
  }
}
