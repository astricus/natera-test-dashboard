import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/posts/posts.actions';
import Button from '../../button/button.component';

import './post-create.styles.scss';

const PostCreate = ({ showModal }) => {
  const showCreatePostModal = () => showModal(false);
  return (
    <div className="post" onClick={showCreatePostModal}>
      <div className="post__item">
        <div className="post__heading-block">
          <div className="post__new-post">
            <img
              src="/img/SVG/Asset 6.svg"
              alt="New post icon"
              className="post__icon-new"
            />
            <p className="post__new-text">New post</p>
          </div>
        </div>
      </div>
      <div className="post__btn-create-wrapper">
        <Button primary={true}>Create</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalIsVisible) => dispatch(showModal(modalIsVisible)),
});

export default connect(null, mapDispatchToProps)(PostCreate);
