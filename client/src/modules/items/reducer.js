import * as Types from './types';

const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_ITEMS_SUCCESS:
      return {
      	...state,
    	...{ items: action.payload }
      }
    default:
      return state;
  }
}
