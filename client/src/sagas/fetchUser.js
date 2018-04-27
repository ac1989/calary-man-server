import axios from 'axios';
import * as types from '../actions/types';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const res = yield call(axios.get, '/api/user');
    yield put({ type: types.FETCH_USER_SUCCEEDED, user: res.data });
    if (res.data) {
      yield put({ type: types.SHOW_SNACKBAR, text: 'Greetings Commander.' });
    }
  } catch (err) {
    console.log(err.response.status);
    yield put({ type: types.FETCH_USER_FAILED });
    yield put({
      type: types.SHOW_SNACKBAR,
      text: `Fetch User Failed : STATUS: ${err.response.status}`
    });
  }
}

export default function* watchFetchUser() {
  yield takeLatest(types.FETCH_USER, fetchUser);
}
