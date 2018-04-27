import * as types from '../actions/types';

const initialState = {
  open: false,
  text: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return { open: true, text: action.text };

    case types.KILL_SNACKBAR:
      return { ...state, open: false };

    default:
      return state;
  }
};
