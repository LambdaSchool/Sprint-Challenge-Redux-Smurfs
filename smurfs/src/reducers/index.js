/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCHING_SMURFS, 
  SMURFS_FETCHED, 
  SMURF_ERROR 
} from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        smurfsFetched: false,
        error: null
      });
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload
      });
    case SMURF_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.payload
      });
    default:
      return state;
  }
};