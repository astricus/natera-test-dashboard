import React from 'react';

import './post-not-published.styles.scss';

const PostNotPublishedMessage = ({ isPublished }) =>
  isPublished ? null : (
    <div className="post__not-published">
      <img
        src="/img/SVG/Asset 5.svg"
        alt="Not published icon"
        className="post__not-published-icon"
      />
      <p className="post__not-published-message">Not published</p>
    </div>
  );

export default PostNotPublishedMessage;
