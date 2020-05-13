import React from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../../redux/projects/projects.actions';

import './project-remove.styles.scss';

const ProjectRemove = ({ projectId, deleteProject }) => (
  <button
    className="projects-table__btn-remove"
    onClick={(event) => {
      event.preventDefault();
      deleteProject(projectId);
    }}
  >
    <img
      src="/img/SVG/Asset 9.svg"
      alt="Project remove icon"
      className="projects-table__icon-remove"
    />
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
});

export default connect(null, mapDispatchToProps)(ProjectRemove);
