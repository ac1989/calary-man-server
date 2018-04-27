import * as types from './types';

export const fetchUser = () => ({
  type: types.FETCH_USER
});

export const saveCalculatorData = data => ({
  type: types.SAVE_CALCULATOR_DATA,
  data
});

export const killSnackbar = () => ({ type: 'KILL_SNACKBAR' });
