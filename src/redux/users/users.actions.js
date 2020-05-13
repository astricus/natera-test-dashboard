import { UsersActionTypes } from './users.types';

export const createNewUser = ({ userName, userId }) => ({
  type: UsersActionTypes.CREATE_NEW_USER,
  payload: { userName, userId },
});

export const setCurrentUserId = (userId) => ({
  type: UsersActionTypes.SET_CURRENT_USER_ID,
  payload: userId,
});
