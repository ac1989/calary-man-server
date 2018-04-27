import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import * as types from '../actions/types';

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
    yield put({
      type: types.SHOW_SNACKBAR,
      text: `Save Failed : STATUS: ${err.response.status}`
    });
    stopSubmit('tdeeCalculatorForm');
  }
}

export function* watchSaveCalculatorData() {
  yield takeLatest(types.SAVE_CALCULATOR_DATA, saveCalculatorData);
}
