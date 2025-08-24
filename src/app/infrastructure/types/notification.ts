export type HmrsNotification = {
  id: number;
  title: string;
  message: string;
  type: 'TimeOff' | 'Birthday' | 'Maintenance' | 'Other';
  read: boolean;
  date: string;
}