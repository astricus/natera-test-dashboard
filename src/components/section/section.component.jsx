import React from 'react';

import './section.styles.scss';

const Section = (props) => (
  <section className="section">{props.children}</section>
);

export default Section;
