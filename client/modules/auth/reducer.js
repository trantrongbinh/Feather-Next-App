import { RECEIVE_LOGIN } from "./types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case RECEIVE_LOGIN:
    return {
      ...state,
      isAuthenticated: true
    }
  default:
    return state;
  }
}
