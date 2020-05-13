import { NotificationActionTypes } from './notification.types';

export const hideNotification = () => ({
  type: NotificationActionTypes.HIDE_NOTIFICATION,
});

export const showNotification = () => ({
  type: NotificationActionTypes.SHOW_NOTIFICATION,
});
