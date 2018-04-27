import { all } from 'redux-saga/effects';
import watchFetchUser from './fetchUser';
import { watchSaveCalculatorData } from './calculatorForm';

export default function* rootSaga() {
  yield all([watchFetchUser(), watchSaveCalculatorData()]);
}
