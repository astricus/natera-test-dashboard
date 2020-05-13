import { createSelector } from 'reselect';

const selectUsersStore = (state) => state.users;

export const selectUsers = createSelector(
  [selectUsersStore],
  (users) => users.users
);

export const selectCurrentUserId = createSelector(
  [selectUsersStore],
  (users) => users.currentUserId
);

export const selectLastUserId = createSelector(
  [selectUsers],
  (users) => users[users.length - 1].id
);
