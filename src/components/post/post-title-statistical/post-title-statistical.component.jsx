import React from 'react';

import './post-title-statistical.styles.scss';

const PostTitleStatistical = ({ title, className }) => {
  const {
    number,
    measure,
    object,
    subtitle,
    growth,
    growthMessage,
    iconUrl,
  } = title;
  return (
    <div className={`post__statistical ${className}`}>
      <img
        src={iconUrl}
        alt="Statistical icon"
        className="post__statistical-icon"
      />
      <h3 className="post__statistical-title">
        <span className="post__statistical-number">{number}</span>
        <span className="post__statistical-unit">
          {measure} {object} <br />
        </span>
        {subtitle}
      </h3>
      <p className="post__statistical-subtitle">
        <span className="post__statistical-subtitle-change">{growth}</span>{' '}
        {growthMessage}
      </p>
    </div>
  );
};

export default PostTitleStatistical;
