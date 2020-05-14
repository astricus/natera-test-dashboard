import { UsersActionTypes } from './users.types';
import usersReducer from './users.reducer';
import data from '../../data.json';

const initialState = {
  users: data.users,
  currentUserId: null,
};

describe('usersReducer', () => {
  test('should return initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  test('should create user on createNewUser action', () => {
    const userId = '5';
    const userName = 'Ivan Petrov';
    const newUser = {
      userId: userId,
      userName: userName,
    };

    expect(
      usersReducer(initialState, {
        type: UsersActionTypes.CREATE_NEW_USER,
        payload: newUser,
      }).users.filter((user) => user.id === userId)[0].name
    ).toEqual(userName);
  });

  test('should set current user id on setCurrentUserId action', () => {
    const userId = '3';

    expect(
      usersReducer(initialState, {
        type: UsersActionTypes.SET_CURRENT_USER_ID,
        payload: userId,
      }).currentUserId
    ).toEqual(userId);
  });
});
