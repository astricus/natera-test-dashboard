import React from 'react';

import './secondary-heading.styles.scss';

const SecondaryHeading = ({ children }) => (
  <h2 className="section__heading secondary-heading">{children}</h2>
);

export default SecondaryHeading;
