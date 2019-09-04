import * as Types from './types';

const initialState = {
  success: '',
  error: '',
  errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case Types.RECEIVE_SUCCESS_MESSAGE:
    return {
      success: action.success
    }
  case Types.RECEIVE_ERRORS_MESSAGE:
    return {
      errors: action.errors
    }
  case Types.RECEIVE_ERROR_MESSAGE:
    return {
      error: action.error
    }
  default:
    return state;
  }
}
