import React from 'react';

import './card.styles.scss';

const Card = ({ isPost, children }) => (
  <div className={`card ${isPost ? 'card--post' : ''}`}>{children}</div>
);

export default Card;
