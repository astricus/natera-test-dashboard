import React from 'react';
import SubsectionHeading from '../typography/subsection-heading/subsection-heading.component';

import './employees-and-projects.styles.scss';

const EmployeesAndProjects = () => (
  <div className="employees-and-projects">
    <div className="employees-and-projects__wrapper">
      <div className="employees">
        <SubsectionHeading>Employees</SubsectionHeading>
        <p className="employees__quantity">
          <img
            src="/img/SVG/Asset 2.svg"
            alt="Employees icon"
            className="employees__icon"
          />
          62
        </p>
        <p className="employees__growth">
          You're in top <span className="employees__growth-percents">24%</span>
        </p>
      </div>
      <div className="projects">
        <SubsectionHeading>Projects</SubsectionHeading>
        <p className="projects__quantity">
          <img
            src="/img/SVG/Asset 3.svg"
            alt="projects icon"
            className="projects__icon"
          />
          23
        </p>
        <p className="projects__growth">
          <span className="projects__growth-percents">3</span> in this month
        </p>
      </div>
    </div>
    <div className="specialization">
      <SubsectionHeading>Top specialization</SubsectionHeading>
      <ul className="specialization__list">
        <li className="specialization__item">java</li>
        <li className="specialization__item">ruby</li>
        <li className="specialization__item">scala</li>
        <li className="specialization__item">js</li>
      </ul>
    </div>
  </div>
);

export default EmployeesAndProjects;
