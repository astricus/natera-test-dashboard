import { ModeActionTypes } from './mode.types';

export const setMode = (mode) => ({
  type: ModeActionTypes.SET_MODE,
  payload: mode,
});
