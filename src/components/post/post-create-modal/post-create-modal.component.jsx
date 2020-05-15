import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideModal, createNewPost } from '../../../redux/posts/posts.actions';
import {
  createNewUser,
  setCurrentUserId,
} from '../../../redux/users/users.actions';
import {
  selectCreatePostModalIsVisible,
  selectLastPostId,
} from '../../../redux/posts/posts.selectors';
import {
  selectCurrentUserId,
  selectLastUserId,
} from '../../../redux/users/users.selectors';
import Modal from '../../modal/modal.component';
import Switch from 'rc-switch';
import Button from '../../button/button.component';
import AuthorSearch from '../post-create-form/author-search/author-search.component';

import './post-create-modal.styles.scss';

// PostCreateModal component is a modal which fires when a user clicks to create a new post
const PostCreateModal = ({
  createPostIsVisible, // Create post modal is visible or not, boolean
  lastPostId, // Last post id selector to create an id = lastPostId + 1 for a new post
  currentUserId, // Current user id selector if an author of the post exists
  lastUserId, // Last user id selector to create new user with id = lastUserId + 1
  hideModal, // hideModal action
  createNewPost, // createNewPost action
  createNewUser, // createNewUser action
  setCurrentUserId, // setCurrentUserId action
}) => {
  // Initial object for a post
  const emptyPost = {
    id: '',
    type: 'ordinary',
    title: '',
    text: '',
    imageUrl: '',
    authorId: '',
    isPublished: false,
  };
  // Initial object with boolean variables for simple validation if the fields are empty
  const dangerDefault = {
    title: false, // for title input
    text: false, // for text input
    author: false, // for author input
  };
  // File placeholder text
  const filePlaceholderDafault = 'Select an image?';
  // Local post state
  const [post, setPost] = useState(emptyPost);
  // local file placeholder text state
  const [filePlaceholder, setFilePlaceholder] = useState(
    filePlaceholderDafault
  );
  // local author name state
  const [author, setAuthor] = useState('');
  // local danger states for title, text and author
  const [danger, setDanger] = useState(dangerDefault);

  // function clearState sets the state to initial values
  const clearState = () => {
    setPost(emptyPost);
    setFilePlaceholder(filePlaceholderDafault);
    setAuthor('');
    setDanger(dangerDefault);
  };

  // function postModalClose closes the modal, uses hideModal action
  const postModalClose = () => hideModal();

  // function handleSwitchChange handles instant publish switch change
  const handleSwitchChange = (value) => {
    setPost({ ...post, isPublished: value });
  };

  // funciton validateInput checks whether the title, text and author fields are empty
  const validateInput = () => {
    let isValid = true;
    let newDanger = { title: false, text: false, author: false };
    if (post.title.length === 0) {
      newDanger.title = true;
      isValid &= false;
    }
    if (post.text.length === 0) {
      newDanger.text = true;
      isValid &= false;
    }
    if (author.length === 0) {
      newDanger.author = true;
      isValid &= false;
    }
    if (!isValid) {
      setDanger(newDanger);
    } else;
    return isValid;
  };

  // function createPost creates a new post, uses createNewPost action, createNewUser action if an author does not exists
  const createPost = () => {
    if (validateInput()) {
      let authorId;
      if (currentUserId) {
        authorId = currentUserId;
      } else {
        authorId = (Number(lastUserId) + 1).toString();
        createNewUser({ userName: author, userId: authorId });
      }
      const postId = (Number(lastPostId) + 1).toString();
      createNewPost({ ...post, id: postId, authorId: authorId });
      clearState();
      setCurrentUserId(null);
      hideModal();
    }
  };

  // function handleInputChange handles tile, text and author inputs change
  const handleInputChange = (event) => {
    if (danger.title || danger.text)
      setDanger({ ...danger, [event.target.name]: false });
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  // function hanldeFileInputChange handles file input change
  const handleFileInputChange = (event) => {
    const imageUrl = event.target.value;
    const fileName = imageUrl.replace(/.*(\/|\\)/, '');
    setFilePlaceholder(fileName);
  };

  // function handleAuthorChange handles author input change
  const handleAuthorChange = (event, { newValue }) => {
    if (danger.author) setDanger({ ...danger, author: false });
    if (currentUserId) setCurrentUserId(null);
    setAuthor(newValue);
  };

  return (
    <Modal isVisible={createPostIsVisible}>
      <div className="post-create-modal">
        <h3 className="post-create-modal__title">New post</h3>
        <form action="" className="form">
          <div className="form__control">
            <label htmlFor="title" className="form__label">
              Message
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={`form__input ${
                danger.title ? 'form__input--danger' : ''
              }`}
              placeholder="Title"
              value={post.title}
              onChange={handleInputChange}
            />
            <textarea
              id="text"
              name="text"
              className={`form__textarea ${
                danger.text ? 'form__textarea--danger' : ''
              }`}
              placeholder="Text"
              value={post.text}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form__control"></div>
          <div className="form__control">
            <label htmlFor="photo" className="form__label">
              Photo
            </label>
            <div className="form__upload-photo" data-text={filePlaceholder}>
              <input
                id="imageUrl"
                name="imageUrl"
                accept="image/*"
                type="file"
                className="form__input-file"
                value={post.imageUrl}
                onChange={handleFileInputChange}
              />
              <button className="form__btn-upload">Upload</button>
            </div>
          </div>
          <div className="form__control">
            <label htmlFor="author" className="form__label">
              Author
            </label>
            <AuthorSearch
              value={author}
              danger={danger.author}
              onChange={handleAuthorChange}
            />
          </div>
        </form>
        <div className="post-create-modal__controls">
          <Switch
            className="post-create-modal__switch"
            onChange={handleSwitchChange}
            defaultChecked={false}
          />
          <p className="post-create-modal__instant-publish">Instant publish</p>
          <button
            className="post-create-modal__cancel d-non-xs"
            onClick={postModalClose}
          >
            Cancel
          </button>
          <p className="post-create-modal__or d-non-xs">or</p>
          <Button
            primary={true}
            className="btn--primary--close post-create-modal__btn-publish"
            onClick={createPost}
          >
            Publish
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  createNewPost: (post) => dispatch(createNewPost(post)),
  createNewUser: ({ userName, userId }) =>
    dispatch(createNewUser({ userName, userId })),
  setCurrentUserId: (userId) => dispatch(setCurrentUserId(userId)),
});

const mapStateToProps = createStructuredSelector({
  createPostIsVisible: selectCreatePostModalIsVisible,
  lastPostId: selectLastPostId,
  currentUserId: selectCurrentUserId,
  lastUserId: selectLastUserId,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateModal);
