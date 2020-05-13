import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const PostCreateModal = ({
  createPostIsVisible,
  lastPostId,
  currentUserId,
  lastUserId,
  hideModal,
  createNewPost,
  createNewUser,
  setCurrentUserId,
}) => {
  const emptyPost = {
    id: '',
    type: 'ordinary',
    title: '',
    text: '',
    imageUrl: '',
    authorId: '',
    isPublished: false,
  };
  const dangerDefault = {
    title: false,
    text: false,
    author: false,
  };
  const filePlaceholderDafault = 'Select an image?';
  const [post, setPost] = useState(emptyPost);
  const [filePlaceholder, setFilePlaceholder] = useState(
    filePlaceholderDafault
  );
  const [author, setAuthor] = useState('');
  const [danger, setDanger] = useState(dangerDefault);

  const clearState = () => {
    setPost(emptyPost);
    setFilePlaceholder(filePlaceholderDafault);
    setAuthor('');
    setDanger(dangerDefault);
  };

  const postModalClose = () => hideModal();

  const handleSwitchChange = (value) => {
    setPost({ ...post, isPublished: value });
  };

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

  const handleInputChange = (event) => {
    if (danger.title || danger.text)
      setDanger({ ...danger, [event.target.name]: false });
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFileInputChange = (event) => {
    const imageUrl = event.target.value;
    const fileName = imageUrl.replace(/.*(\/|\\)/, '');
    setFilePlaceholder(fileName);
  };

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

const mapStateToProps = (state) => ({
  createPostIsVisible: selectCreatePostModalIsVisible(state),
  lastPostId: selectLastPostId(state),
  currentUserId: selectCurrentUserId(state),
  lastUserId: selectLastUserId(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateModal);
