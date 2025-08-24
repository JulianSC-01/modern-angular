import { Component, inject, signal } from '@angular/core';
import { HmrsNotification } from '../../../infrastructure/types/notification';
import { NotificationService } from '../../../services/notification-service';

@Component({
  imports: [],
  templateUrl: './header.html',
  selector: 'app-header',
  styleUrl: './header.css'
})
export class Header {
  private readonly notificationService =
    inject(NotificationService);

  notifications = this.notificationService.notifications;
  unreadNotifications = this.notificationService.unreadNotifications;

  notificationsOpen = signal(false);

  constructor() {
    this.notificationService.connect();
  }

  markAsRead(notification: HmrsNotification) {
    this.notificationService.markAsRead(notification);
  }
}
