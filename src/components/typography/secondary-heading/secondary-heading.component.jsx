import React from 'react';

import './secondary-heading.styles.scss';

const SecondaryHeading = (props) => (
  <h2 className="section__heading secondary-heading">{props.children}</h2>
);

export default SecondaryHeading;
