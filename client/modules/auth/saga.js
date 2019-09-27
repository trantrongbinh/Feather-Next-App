import { call, put, takeLatest } from 'redux-saga/effects';
import { registerAuth, loginAuth } from '../../services/auth';
import * as Types from './types';
import { recErrorMessage, recErrorsMessage, recSuccessMessage } from './../alert/actions';

function* callRegisterAuth (action) {
  try {
    let user = yield call(registerAuth, action.data);
    
    if (user) {
      yield put(recSuccessMessage(user));
      yield call(action.router.push, '/auth/login');
    }
  } catch (err) {
    yield put(recErrorMessage(err.message));
  }
}

function* callLoginAuth(action) {
  try {
    let token = yield call(loginAuth, action.data);

    if (token) {
      yield call(action.router.push, '/');
    }
  } catch (e) {
    if (e.errors && Object.keys(e.errors).length !== 0) {
      yield put(recErrorsMessage(e.errors))
    } else {
      yield put(recErrorMessage(e.data.message))
    }
  }
}

export default function* watchAuthSaga () {
  yield takeLatest(Types.REQUEST_REGISTER, callRegisterAuth);
  yield takeLatest(Types.REQUEST_LOGIN, callLoginAuth);
}
