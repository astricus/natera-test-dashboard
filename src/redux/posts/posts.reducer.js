import { PostsActionTypes } from './posts.types';
import data from '../../data.json';

const INITIAL_STATE = {
  posts: data.posts,
  modalIsVisible: false,
  createPostIsVisible: false,
  currentPostId: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.CREATE_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case PostsActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.length
          ? state.posts.filter((post) => post.id !== action.payload)
          : state.posts,
      };
    case PostsActionTypes.PUBLISH_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            post.isPublished = true;
            return post;
          } else return post;
        }),
      };
    case PostsActionTypes.UNPUBLISH_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            post.isPublished = false;
            return post;
          } else return post;
        }),
      };
    case PostsActionTypes.SET_CURRENT_POST:
      return {
        ...state,
        currentPostId: action.payload,
      };
    case PostsActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalIsVisible: action.payload,
        createPostIsVisible: !action.payload,
      };
    case PostsActionTypes.HIDE_MODAL:
      return {
        ...state,
        modalIsVisible: false,
        createPostIsVisible: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
