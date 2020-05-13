import { createSelector } from 'reselect';

const selectNotificationStore = (state) => state.notification;

export const selectNotificationIsVisible = createSelector(
  [selectNotificationStore],
  (notification) => notification.isVisible
);
