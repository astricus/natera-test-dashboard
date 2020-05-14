import { ProjectsActionTypes } from './projects.types';
import data from '../../data.json';

// Mode reducer
// mode: true - dashboard mode
// mode: false - edit mode
const INITIAL_STATE = {
  projects: data.projects,
};

const ProjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.length
          ? state.projects.filter((project) => project.id !== action.payload)
          : state.projects,
      };
    default:
      return state;
  }
};

export default ProjectsReducer;
