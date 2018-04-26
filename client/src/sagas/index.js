import axios from 'axios';
import { call, put, takeLatest, all } from 'redux-saga/effects';
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
  const res = yield call(axios.post, '/api/user/calculator', {
    data: action.data
  });
  yield put({
    type: types.SAVE_CALCULATOR_DATA_SUCCEEDED,
    user: res.data
  });
}

function* watchSaveCalculatorData() {
  yield takeLatest(types.SAVE_CALCULATOR_DATA, saveCalculatorData);
}

//// ---------------------------------------------------------------------------
export default function* rootSaga() {
  yield all([watchFetchUser(), watchSaveCalculatorData()]);
}
