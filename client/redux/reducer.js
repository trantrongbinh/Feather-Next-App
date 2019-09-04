import { combineReducers } from 'redux';
import alertReducer from '../modules/alert/reducer';
import itemReducer from '../modules/items/reducer';
import authReducer from '../modules/auth/reducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  items: itemReducer,
  auth: authReducer
});

export default rootReducer;
