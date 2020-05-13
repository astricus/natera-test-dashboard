import { createSelector } from 'reselect';

const selectPostsStore = (state) => state.posts;

export const selectPosts = createSelector(
  [selectPostsStore],
  (posts) => posts.posts
);

export const selectCurrentPostId = createSelector(
  [selectPostsStore],
  (posts) => posts.currentPostId
);

export const selectCurrentPost = createSelector(
  [selectPosts, selectCurrentPostId],
  (posts, currentPostId) =>
    posts.length ? posts.find((post) => post.id === currentPostId) : null
);

export const selectPostModalIsVisible = createSelector(
  [selectPostsStore],
  (posts) => posts.modalIsVisible
);

export const selectCreatePostModalIsVisible = createSelector(
  [selectPostsStore],
  (posts) => posts.createPostIsVisible
);

export const selectLastPostId = createSelector([selectPosts], (posts) =>
  posts.length ? posts[posts.length - 1].id : '0'
);
