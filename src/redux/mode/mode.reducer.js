import { ModeActionTypes } from './mode.types';

// Mode reducer
// mode: true - dashboard mode
// mode: false - edit mode
const INITIAL_STATE = {
  mode: true,
};

const modeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModeActionTypes.SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modeReducer;
