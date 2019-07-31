import { combineReducers } from 'redux';
import itemReducer from '../modules/items/reducer';

const rootReducer = combineReducers({
    items: itemReducer
});

export default rootReducer;
