import { ModeActionTypes } from './mode.types';
import modeReducer from './mode.reducer';

const initialState = {
  mode: true,
};

describe('modeReducer', () => {
  test('should return initial state', () => {
    expect(modeReducer(undefined, {})).toEqual(initialState);
  });

  test('should set mode to payload on setMode action', () => {
    const updatedMode = false;

    expect(
      modeReducer(initialState, {
        type: ModeActionTypes.SET_MODE,
        payload: updatedMode,
      }).mode
    ).toEqual(updatedMode);
  });
});
