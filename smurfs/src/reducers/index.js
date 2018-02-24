import {IS_FETCHING, SMURFS_FETCHED, ERROR_FETCHING_SMURFS } from '../actions/getSmurfs';
import { DELETING_SMURF, SMURF_DELETED, ERROR_DELETING_SMURF } from '../actions/deleteSmurf';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: false
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetchingSmurfs: true };
      case SMURFS_FETCHED:
      // console.log('Smurfs: ', action.payload);
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case ERROR_FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case DELETING_SMURF:
      return { ...state, deletingSmurfs: true };
    case SMURF_DELETED:
      return { ...state, deletingSmurfs: false, smurfs: action.payload };
    case ERROR_DELETING_SMURF:
      return { ...state, deletingSmurfs: false, error: action.payload }
    default:
      return state;
  }
};