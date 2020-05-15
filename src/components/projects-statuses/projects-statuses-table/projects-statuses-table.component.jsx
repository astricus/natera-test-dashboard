import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjects } from '../../../redux/projects/projects.selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SubsectionHeading from '../../typography/subsection-heading/subsection-heading.component';
import ProjectStatusBar from '../project-status-bar/project-status-bar.component';
import ProjectRemove from '../project-remove/project-remove.component';

import './projects-statuses-table.styles.scss';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const ProjectsStatusesTable = ({ mode, projects }) => (
  <div className="projects-statuses__wrapper">
    <table
      className={`projects-table ${mode ? '' : 'projects-table--edit-mode'}`}
    >
      <thead>
        <tr>
          <th>
            <SubsectionHeading>Project</SubsectionHeading>
          </th>
          <th className="d-non-xs">
            <SubsectionHeading>Company</SubsectionHeading>
          </th>
          <th>
            <SubsectionHeading>Status</SubsectionHeading>
          </th>
          <th>
            <SubsectionHeading>
              Release <span className="d-non-md">date</span>
            </SubsectionHeading>
          </th>
        </tr>
      </thead>
      <TransitionGroup component="tbody">
        {projects.map((project) => (
          <CSSTransition
            key={project.id}
            timeout={200}
            classNames="projects-table__row-animate"
          >
            <tr>
              <td className="projects-table__project-title">
                <div>
                  {project.project_title}
                  <p className="projects-table__company--mobile visible-xs">
                    {project.company}
                  </p>
                </div>
              </td>
              <td className="projects-table__company d-non-xs">
                <div>{project.company}</div>
              </td>
              <td className="projects-table__status">
                <div>
                  <p className="visible-sm">{project.status}%</p>
                  <ProjectStatusBar percents={project.status} />
                </div>
              </td>
              <td className="projects-table__release-date">
                <div>
                  {formatDate(project.release_date)}
                  {!mode ? <ProjectRemove projectId={project.id} /> : null}
                </div>
              </td>
            </tr>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </table>
  </div>
);

const mapStateToProps = createStructuredSelector({
  projects: selectProjects,
});

export default connect(mapStateToProps)(ProjectsStatusesTable);
