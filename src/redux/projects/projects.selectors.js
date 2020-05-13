import { createSelector } from 'reselect';

const projectsStore = (state) => state.projects;

export const selectProjects = createSelector(
  [projectsStore],
  (projects) => projects.projects
);
