import axios from 'axios';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/types';

export function* fetchUser() {
  const response = yield call(axios.get, '/api/user');
  yield put({ type: types.FETCH_USER_SUCCEEDED, user: response.data });
}

export function* watchFetchUser() {
  yield takeLatest(types.FETCH_USER, fetchUser);
}

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
