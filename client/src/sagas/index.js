import axios from 'axios';
import { call, put, takeLatest, all } from 'redux-saga/effects';

export function* fetchUser() {
  try {
    const user = yield call(axios.get, '/api/user');
    yield put({ type: 'FETCH_USER_SUCCEEDED', user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_FAILED', error });
  }
}

export function* watchFetchUser() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
