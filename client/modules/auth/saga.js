import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { registerAuth, loginAuth, refreshAuth, currentAuth } from './api';
import * as Types from './types'
import { recLoginAuth, recCurrentUser } from './actions';
import { recErrorsMessage, recSuccessMessage, recErrorMessage } from './../alert/actions';
import { setCookie, removeCookie } from './../../utils/cookie';

function* callRegisterAuth(action) {
    try {
        let user = yield call(registerAuth, action.data);
        yield put(recSuccessMessage(user.data.message))
        yield call(action.router.push, '/auth/login');
    } catch (e) {
        yield put(recErrorsMessage(e.response.data.errors))
    }
}

function* callLoginAuth(action) {
    try {
        let user = yield call(loginAuth, action.data);
        if (user.data) {
            let token = user.data.token;
            setCookie("token", token);
            yield put(recLoginAuth(token));
            yield call(action.router.push, '/');
        }
    } catch (e) {
        if (e.response.data.error) {
            yield put(recErrorMessage(e.response.data.error))
            yield put(recErrorsMessage(null))
        } else {
            yield put(recErrorsMessage(e.response.data.errors))
            yield put(recErrorMessage(null))
        }
    }
}

function* callReAuthenticate(action) {
    try {
        yield put(recLoginAuth(action.token));
    } catch (e) {
        console.log(e.message);
    }
}

function* callCurrentUser(action) {
    try {
        const auth = yield call(currentAuth);
        yield put(recCurrentUser(auth.data.user));
    } catch (e) {
        console.log(e.message);
    }
}

function* callLogoutAuthenticate() {
    try {
        removeCookie("token");
        yield put(recLoginAuth(null));
    } catch (e) {
        console.log(e.message);
    }
}

export function* watchAuthSaga() {
    yield takeEvery(Types.RE_REQUEST_LOGIN_AUTH, callReAuthenticate);
    yield takeEvery(Types.REQUEST_CURRENT_USER, callCurrentUser);
    yield takeLatest(Types.REQUEST_LOGOUT_AUTH, callLogoutAuthenticate);
    yield takeLatest(Types.REQUEST_LOGIN_AUTH, callLoginAuth);
    yield takeLatest(Types.REQUEST_REGISTER_AUTH, callRegisterAuth);
}
