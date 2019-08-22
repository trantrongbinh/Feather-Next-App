import * as Types from './types';

export function reqRegisterAuth (data, router) {
    return {
        type: Types.REQUEST_REGISTER_AUTH,
        data,
        router
    }
}

export function reqLoginAuth (data, router) {
    return {
        type: Types.REQUEST_LOGIN_AUTH,
        data,
        router
    }
}

export function recLoginAuth (decoded) {
    return {
        type: Types.RECEIVE_LOGIN_AUTH,
        decoded
    }
}

export function reReqLoginAuth (token) {
    return {
        type: Types.RE_REQUEST_LOGIN_AUTH,
        token
    }
}

export function reqCurrentUser () {
    return {
        type: Types.REQUEST_CURRENT_USER,
    }
}

export function recCurrentUser (user) {
    return {
        type: Types.RECEIVE_CURRENT_USER,
        user
    }
}

export function reqLogoutAuth () {
    return {
        type: Types.REQUEST_LOGOUT_AUTH
    }
}
