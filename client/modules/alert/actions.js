import * as Types from './types';

export function recSuccessMessage(success) {
  return {
    type: Types.RECEIVE_SUCCESS_MESSAGE,
    success
  }
}

export function recErrorsMessage(errors) {
  return {
    type: Types.RECEIVE_ERRORS_MESSAGE,
    errors
  }
}

export function recErrorMessage(error) {
  return {
    type: Types.RECEIVE_ERROR_MESSAGE,
    error
  }
}
