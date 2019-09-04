import { all, fork } from 'redux-saga/effects';
import watchItemSaga from '../modules/items/saga';
import watchAuthSaga from '../modules/auth/saga';

function * rootSaga () {
  yield all([
    fork(watchItemSaga),
    fork(watchAuthSaga)
  ]);
}

export default rootSaga
