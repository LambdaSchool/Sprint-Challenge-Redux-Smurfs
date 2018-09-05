/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURF_FETCHED,
  SAVING_SMURF,
  SMUFT_SAVED,
  // DELETING_SMURF,
  // SMURF_DELETED,
  ERROR,
} from '../actions'

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
// i could really make this code alot easer.  i could dispatch the same action for fetch, add, update, and delete.  all they are doing is pushing the full smurfs back to state
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SMURF_FETCHED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
      });

    case SAVING_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case SMUFT_SAVED:
      return Object.assign({}, state, {
        smurfs: action.payload
      });

    case ERROR:
      return Object.assign({}, state, { error: action.payload })


    default:
      return state;
  }
}