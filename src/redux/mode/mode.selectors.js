import { createSelector } from 'reselect';

const selectModeStore = (state) => state.mode;

export const selectMode = createSelector(
  [selectModeStore],
  (mode) => mode.mode
);
