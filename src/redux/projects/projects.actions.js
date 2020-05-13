import { ProjectsActionTypes } from './projects.types';

export const deleteProject = (projectId) => ({
  type: ProjectsActionTypes.DELETE_PROJECT,
  payload: projectId,
});
