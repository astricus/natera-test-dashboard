import React from 'react';

import './subsection-heading.styles.scss';

const SubsectionHeading = (props) => {
  return <h3 className="subsection-heading">{props.children}</h3>;
};

export default SubsectionHeading;
