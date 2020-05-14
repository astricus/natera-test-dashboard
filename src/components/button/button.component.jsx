import React from 'react';

import './button.styles.scss';

const Button = ({
  primary,
  secondary,
  danger,
  className,
  children,
  onClick,
}) => (
  <button
    type="button"
    className={`btn ${primary ? 'btn--primary' : ''} ${
      secondary ? 'btn--secondary' : ''
    } ${danger ? 'btn--danger' : ''} ${className ? className : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
