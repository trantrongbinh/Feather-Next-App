import { call, put, takeLatest } from 'redux-saga/effects';
import { registerAuth } from '../../services/auth';
import * as Types from './types'
import { recErrorMessage, recSuccessMessage } from './../alert/actions';

function* callRegisterAuth (action) {
  try {
    let user = yield call(registerAuth, action.data);
    
    if (user) {
      yield put(recSuccessMessage(user))
    }

    yield call(action.router.push, '/auth/login');
  } catch (err) {
    yield put(recErrorMessage(err.message))
  }
}

export default function* watchAuthSaga () {
  yield takeLatest(Types.REQUEST_REGISTER, callRegisterAuth);
}
