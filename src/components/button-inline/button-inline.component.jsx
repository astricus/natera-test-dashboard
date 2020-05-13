import React from 'react';

import './button-inline.styles.scss';

const ButtonInline = ({ className, children }) => (
  <button className={`btn-inline ${className}`}>{children}</button>
);

export default ButtonInline;
