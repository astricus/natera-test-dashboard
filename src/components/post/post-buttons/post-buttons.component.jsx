import React from 'react';
import { connect } from 'react-redux';
import {
  deletePost,
  publishPost,
  unpublishPost,
} from '../../../redux/posts/posts.actions';
import Button from '../../button/button.component';

import './post-buttons.styles.scss';

const PostButtons = ({
  postId,
  isPublished,
  deletePost,
  publishPost,
  unpublishPost,
}) => {
  if (isPublished) {
    return (
      <div className="post__publish">
        <Button danger onClick={() => unpublishPost(postId)}>
          Unpublish
        </Button>
      </div>
    );
  } else {
    return (
      <div className="post__publish">
        <Button secondary onClick={() => publishPost(postId)}>
          Publish
        </Button>
        <Button danger onClick={() => deletePost(postId)}>
          Remove
        </Button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (postId) => dispatch(deletePost(postId)),
  publishPost: (postId) => dispatch(publishPost(postId)),
  unpublishPost: (postId) => dispatch(unpublishPost(postId)),
});

export default connect(null, mapDispatchToProps)(PostButtons);
