import { PostsActionTypes } from './posts.types';
import postsReducer from './posts.reducer';
import data from '../../data.json';

const initialState = {
  posts: data.posts,
  modalIsVisible: false,
  createPostIsVisible: false,
  currentPostId: null,
};

describe('postsReducer', () => {
  test('should return initial state', () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  test('should set new post to payload on createPost action', () => {
    const postMock = {
      id: '33',
      title: 'Sample post 33',
      type: 'ordinary',
      text: 'Sample text 33',
      imageUrl: '',
      authorId: '1',
      isPublished: true,
    };

    const postsLength = initialState.posts.length;

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.CREATE_NEW_POST,
        payload: postMock,
      }).posts[postsLength]
    ).toEqual(postMock);
  });

  test('should delete post on deletePost action', () => {
    const postId = '7';

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.DELETE_POST,
        payload: postId,
      }).posts.find((post) => post.id === postId)
    ).toBeUndefined();
  });

  test('should return same posts on deletePost action if post with postId in payload not exist', () => {
    const postId = '8';

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.DELETE_POST,
        payload: postId,
      })
    ).toEqual(initialState);
  });

  test('should set isPublished to true on publishPost action', () => {
    const postId = '7';

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.PUBLISH_POST,
        payload: postId,
      }).posts.filter((post) => post.id === postId)[0].isPublished
    ).toEqual(true);
  });

  test('should set isPublished to false on unpublishPost action', () => {
    const postId = '2';

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.UNPUBLISH_POST,
        payload: postId,
      }).posts.filter((post) => post.id === postId)[0].isPublished
    ).toEqual(false);
  });

  test('should set modalIsVisible to true on showModal action', () => {
    const modalType = true;

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SHOW_MODAL,
        payload: modalType,
      }).modalIsVisible
    ).toEqual(true);
  });

  test('should set createPostIsVisible to true on showModal action', () => {
    const modalType = false;

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SHOW_MODAL,
        payload: modalType,
      }).createPostIsVisible
    ).toEqual(true);
  });

  test('should set createPostIsVisible and modalIsVisible to false on hideModal action', () => {
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.HIDE_MODAL,
      }).createPostIsVisible
    ).toEqual(false);

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.HIDE_MODAL,
      }).modalIsVisible
    ).toEqual(false);
  });

  test('should set currentPostId to payload on setCurrentPost action', () => {
    const postId = '5';

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SET_CURRENT_POST,
        payload: postId,
      }).currentPostId
    ).toEqual(postId);
  });
});
