import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  snackbar: snackbarReducer
});
