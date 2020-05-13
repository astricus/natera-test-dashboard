import { PostsActionTypes } from './posts.types';

export const createNewPost = (post) => ({
  type: PostsActionTypes.CREATE_NEW_POST,
  payload: post,
});

export const unpublishPost = (postId) => ({
  type: PostsActionTypes.UNPUBLISH_POST,
  payload: postId,
});

export const publishPost = (postId) => ({
  type: PostsActionTypes.PUBLISH_POST,
  payload: postId,
});

export const deletePost = (postId) => ({
  type: PostsActionTypes.DELETE_POST,
  payload: postId,
});

export const setCurrentPost = (postId) => ({
  type: PostsActionTypes.SET_CURRENT_POST,
  payload: postId,
});

export const showModal = (modalType) => ({
  type: PostsActionTypes.SHOW_MODAL,
  payload: modalType,
});

export const hideModal = () => ({
  type: PostsActionTypes.HIDE_MODAL,
});
