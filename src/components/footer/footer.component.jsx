import React from 'react';

import './footer.styles.scss';

const currentDate = new Date();
const currentYear = currentDate.getFullYear().toString();

const Footer = () => (
  <div className="footer">
    <p className="footer__text">
      Hosta LLC 2015-{currentYear}. Made by Konstantin Romanenko.
    </p>
  </div>
);

export default Footer;
