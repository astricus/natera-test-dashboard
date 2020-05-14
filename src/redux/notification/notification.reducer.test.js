import { NotificationActionTypes } from './notification.types';
import notificationReducer from './notification.reducer';

const initialState = {
  isVisible: true,
};

describe('modeReducer', () => {
  test('should return initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  test('should set false to payload on hideNotification action', () => {
    const isVisibleFalse = false;
    expect(
      notificationReducer(initialState, {
        type: NotificationActionTypes.HIDE_NOTIFICATION,
      }).isVisible
    ).toEqual(isVisibleFalse);
  });

  test('should set true to payload on showNotification action', () => {
    const isVisibleTrue = true;
    expect(
      notificationReducer(initialState, {
        type: NotificationActionTypes.SHOW_NOTIFICATION,
      }).isVisible
    ).toEqual(isVisibleTrue);
  });
});
