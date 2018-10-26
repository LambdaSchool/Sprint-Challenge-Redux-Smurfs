import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';

export default combineReducers({
  smurfs: smurfsReducer
});
