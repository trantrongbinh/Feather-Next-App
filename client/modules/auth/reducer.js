import { RECEIVE_LOGIN_AUTH, RECEIVE_CURRENT_USER } from "./types";
import { getCookie } from './../../utils/cookie';

const initialState = {
    isAuthenticated: getCookie('token') ? true : false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOGIN_AUTH:
            return {
                ...state,
                isAuthenticated: action.decoded ? true : false
            }
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
