import { combineReducers } from 'redux';
import comments from './Comments.js';
import users from './users.js';

const reducer = combineReducers({
  comments,
  users
});

export default reducer;