import React from 'react';
import SubsectionHeading from '../typography/subsection-heading/subsection-heading.component';
import ButtonInline from '../button-inline/button-inline.component';
import Area from '../chart/chart.component';

import './earnings.styles.scss';

const Earnings = () => (
  <div className="earnings">
    <div className="earnings__info">
      <SubsectionHeading>Earnings</SubsectionHeading>
      <p className="earnings__amount">
        <img
          src="/img/SVG/Asset 1.svg"
          alt="Earnings icon"
          className="earnings__icon"
        />
        2289.32
      </p>
      <p className="earnings__growth">
        <span className="earnings__growth-percents">+12%</span> since last year
      </p>
      <div className="earnings__statistics-button d-non-xs">
        <ButtonInline>All statistics</ButtonInline>
      </div>
    </div>
    <div className="earnings__chart">
      <Area />
    </div>
    <div className="earnings__statistics-button visible-xs">
      <ButtonInline className="btn-inline--mobile">All statistics</ButtonInline>
    </div>
  </div>
);

export default Earnings;
