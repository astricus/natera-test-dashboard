import { UsersActionTypes } from './users.types';
import { createNewUserFromName } from './users.utils';

import data from '../../data.json';

const INITIAL_STATE = {
  users: data.users,
  currentUserId: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.CREATE_NEW_USER:
      return {
        ...state,
        users: createNewUserFromName(state.users, action.payload),
      };
    case UsersActionTypes.SET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserId: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
