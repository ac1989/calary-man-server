import * as types from './types';

export const fetchUser = payload => ({
  type: types.FETCH_USER,
  payload: payload
});
