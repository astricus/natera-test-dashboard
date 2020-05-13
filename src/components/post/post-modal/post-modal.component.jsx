import React from 'react';
import { connect } from 'react-redux';
import { hideModal, setCurrentPost } from '../../../redux/posts/posts.actions';
import {
  selectCurrentPost,
  selectPostModalIsVisible,
} from '../../../redux/posts/posts.selectors';
import Modal from '../../modal/modal.component';
import PostTitleStatistical from '../post-title-statistical/post-title-statistical.component';
import PostAuthor from '../post-author/post-author.component';
import Button from '../../button/button.component';

import './post-modal.styles.scss';

const PostModal = ({ isVisible, post, hideModal }) => {
  if (post) {
    const { type, title, text, imageUrl, authorId } = post;

    const postModalClose = () => {
      setCurrentPost(null);
      hideModal();
    };

    return (
      <Modal isVisible={isVisible}>
        <div className="post-modal">
          {imageUrl ? (
            <img src={imageUrl} alt="Post" className="post-modal__image" />
          ) : null}
          <div className="post-modal__post">
            {type === 'ordinary' ? (
              <h3 className="post-modal__title">{title}</h3>
            ) : (
              <PostTitleStatistical
                title={title}
                className="post-modal__title-statistical"
              />
            )}
            <p className="post-modal__text">{text}</p>
            <PostAuthor
              mode={true}
              authorId={authorId}
              className="post-modal__author"
            />
          </div>
          <div className="post-modal__btn-wrapper">
            <Button
              primary={true}
              className="btn--primary--close"
              onClick={postModalClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  } else return null;
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  setCurrentPost: (postId) => dispatch(setCurrentPost(postId)),
});

const mapStateToProps = (state) => ({
  post: selectCurrentPost(state),
  isVisible: selectPostModalIsVisible(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
