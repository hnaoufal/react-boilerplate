import { combineReducers } from 'redux';

import reviews from './reviewReducers';

export default combineReducers({
  data: combineReducers({
    reviews,
  }),
  ui: combineReducers({
    loadUsers: () => ({ type: 'exampleReducer', payload: 'tens' })
  }),
});
