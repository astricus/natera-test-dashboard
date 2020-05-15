import React from 'react';

import './subsection-heading.styles.scss';

const SubsectionHeading = ({ children }) => {
  return <h3 className="subsection-heading">{children}</h3>;
};

export default SubsectionHeading;
