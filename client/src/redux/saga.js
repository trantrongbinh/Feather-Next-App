import { fork } from 'redux-saga/effects';
import watchItemSaga from '../modules/items/saga';

function * rootSaga () {
  yield fork(watchItemSaga);
}

export default rootSaga
