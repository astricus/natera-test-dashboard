import { NotificationActionTypes } from './notification.types';

const INITIAL_STATE = {
  isVisible: true,
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationActionTypes.HIDE_NOTIFICATION:
      return {
        ...state,
        isVisible: false,
      };
    case NotificationActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        isVisible: true,
      };
    default:
      return state;
  }
};

export default notificationReducer;
