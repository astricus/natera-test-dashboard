import { combineReducers } from 'redux';

import modeReducer from './mode/mode.reducer';
import postsReducer from './posts/posts.reducer';
import projectReducer from './projects/projects.reducer';
import notificationReducer from './notification/notification.reducer';
import usersReducer from './users/users.reducer';

export default combineReducers({
  mode: modeReducer,
  posts: postsReducer,
  projects: projectReducer,
  notification: notificationReducer,
  users: usersReducer,
});
