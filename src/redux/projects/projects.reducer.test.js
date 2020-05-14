import { ProjectsActionTypes } from './projects.types';
import projectsReducer from './projects.reducer';
import data from '../../data.json';

const initialState = {
  projects: data.projects,
};

describe('projectsReducer', () => {
  test('should return initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual(initialState);
  });

  test('should delete project on deleteProject action', () => {
    const projectId = '7';

    expect(
      projectsReducer(initialState, {
        type: ProjectsActionTypes.DELETE_PROJECT,
        payload: projectId,
      }).projects.find((project) => project.id === projectId)
    ).toBeUndefined();
  });
});
