import React from 'react';
import PostTitleStatistical from '../post-title-statistical/post-title-statistical.component';

import './post-title.styles.scss';

const PostTitle = ({ mode, type, title, imageUrl, isPublished }) =>
  imageUrl ? (
    <div
      className={`post__item ${!mode ? 'post__item--edit-mode' : ''} ${
        !mode && !isPublished ? 'post__item--not-published' : ''
      }`}
      style={{
        background: `url(${imageUrl}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <h3 className="post__heading post__heading--has-image">{title}</h3>
    </div>
  ) : (
    <div
      className={`post__item ${!mode ? 'post__item--edit-mode' : ''} ${
        !mode && !isPublished ? 'post__item--not-published' : ''
      }`}
    >
      <div className={`${isPublished ? 'post__heading-block' : ''}`}>
        {type === 'ordinary' ? (
          <h3 className="post__heading">{title}</h3>
        ) : type === 'statistical' ? (
          <PostTitleStatistical title={title} />
        ) : (
          ''
        )}
      </div>
    </div>
  );

export default PostTitle;
