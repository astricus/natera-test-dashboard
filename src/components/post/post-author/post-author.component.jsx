import React from 'react';
import { connect } from 'react-redux';
import { selectUsers } from '../../../redux/users/users.selectors';

import './post-author.styles.scss';

const PostAuthor = ({ users, mode, authorId, className }) => {
  const { name, position, avatarUrl } = users.find(
    (user) => user.id === authorId
  );
  return (
    <div
      className={`post__author ${
        !mode ? 'post__author--edit-mode' : ''
      } ${className}`}
    >
      <img src={avatarUrl} alt={name} className="post__author-photo" />
      <div className="post__author-info">
        <p className="post__author-name">{name}</p>
        <p className="post__author-position">{position}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

export default connect(mapStateToProps)(PostAuthor);
