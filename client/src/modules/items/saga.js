import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import { findAll } from '../../api/sample-api';

// Respond to the actions that are caught by the watcher sagas
function* fetchItems() {
  try {
    // Try to call the API
    const response = yield call(findAll);

    // Dispatch the action to the reducers
    yield put({
      type: Types.FETCH_ITEMS_SUCCESS,
      payload: response
    });
  } catch (error) {
    // Act on the error
    console.log('Request failed! Could not fetch posts.');
  }
}

export default function* watchItemSaga() {
  yield takeLatest(Types.FETCH_ITEMS, fetchItems);
}
