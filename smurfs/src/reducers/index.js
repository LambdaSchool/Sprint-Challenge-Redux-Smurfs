/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILURE,
  POSTING_SMURF,
  POSTING_SMURF_SUCCESSFUL,
  POSTING_SMURF_FAILURE,
  DELETING_SMURF_SUCCESSFUL,
  DELETING_SMURF_FAILURE,
  UPDATING_SMURF_SUCCESSFUL,
  UPDATING_SMURF_FAILURE
} from '../actions';

let id = 1;

const newId = () => {
  return id += 1;
}

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true});
    case FETCHING_SMURFS_SUCCESSFUL:
      return Object.assign({}, state, {smurfs: action.payload, fetchingSmurfs: false});
    case FETCHING_SMURFS_FAILURE:
      return Object.assign({}, state, {fetchingSmurfs: false, error: action.payload});
    case POSTING_SMURF:
      return Object.assign({}, state, {addingSmurf: true});
    case POSTING_SMURF_SUCCESSFUL:
      action.payload.id = newId();
      return Object.assign({}, state, {smurfs: [...state.smurfs, action.payload]});
    case POSTING_SMURF_FAILURE:
      return Object.assign({}, state, {error: action.payload});
    case DELETING_SMURF_SUCCESSFUL:
      return Object.assign({}, state, {smurfs: action.payload});
    case DELETING_SMURF_FAILURE:
      return Object.assign({}, state, {error: action.payload});
    case UPDATING_SMURF_SUCCESSFUL:
      return Object.assign({}, state, {smurfs: action.payload});
    case UPDATING_SMURF_FAILURE:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
}