import * as Types from './types';

export function reqRegisterAuth (data, router) {
  return {
    type: Types.REQUEST_REGISTER,
    data,
    router
  }
}

export function reqLoginAuth (data, router) {
  return {
    type: Types.REQUEST_LOGIN,
    data,
    router
  }
}
