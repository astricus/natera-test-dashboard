import React from 'react';
import { connect } from 'react-redux';
import { showModal, setCurrentPost } from '../../redux/posts/posts.actions';
import PostButtons from './post-buttons/post-buttons.component';
import PostTitle from './post-title/post-title.component';
import PostNotPublishedMessage from './post-not-published/post-not-published.component';
import PostAuthor from './post-author/post-author.component';

import './post.styles.scss';

const Post = (props) => {
  const {
    mode,
    id,
    type,
    title,
    imageUrl,
    authorId,
    isPublished,
    showModal,
    setCurrentPost,
  } = props;

  const showPostModal = (event) => {
    if (!event.target.className.includes('btn')) {
      showModal(true); // showModal(modalType) - shows modal, modalType = true for a post, modalType = false for Create Post
      setCurrentPost(id);
    }
  };

  return (
    <div className="post" onClick={showPostModal}>
      {!mode ? (
        <PostButtons mode={mode} isPublished={isPublished} postId={id} />
      ) : null}
      <PostTitle
        mode={mode}
        type={type}
        title={title}
        imageUrl={imageUrl}
        isPublished={isPublished}
      />
      {mode ? null : <PostNotPublishedMessage isPublished={isPublished} />}
      <PostAuthor mode={mode} authorId={authorId} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType) => dispatch(showModal(modalType)),
  setCurrentPost: (postId) => dispatch(setCurrentPost(postId)),
});

export default connect(null, mapDispatchToProps)(Post);
