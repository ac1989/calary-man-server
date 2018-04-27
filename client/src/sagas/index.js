import axios from 'axios';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import * as types from '../actions/types';

export function* fetchUser() {
  console.log('hello');
  const res = yield call(axios.get, '/api/user');
  yield put({ type: types.FETCH_USER_SUCCEEDED, user: res.data });
}

export function* watchFetchUser() {
  yield takeLatest(types.FETCH_USER, fetchUser);
}

//// ---------------------------------------------------------------------------
function* saveCalculatorData(action) {
  try {
    const res = yield call(axios.post, '/api/user/calculator', {
      data: action.data
    });
    yield put({
      type: types.SAVE_CALCULATOR_DATA_SUCCEEDED,
      user: res.data
    });
    stopSubmit('tdeeCalculatorForm');
    yield put({ type: types.SHOW_SNACKBAR, text: 'Save Succeeded!' });
  } catch (err) {
    // TODO: handle error
    console.warn(err);
  }
}

function* watchSaveCalculatorData() {
  yield takeLatest(types.SAVE_CALCULATOR_DATA, saveCalculatorData);
}

//// ---------------------------------------------------------------------------
export default function* rootSaga() {
  yield all([watchFetchUser(), watchSaveCalculatorData()]);
}
