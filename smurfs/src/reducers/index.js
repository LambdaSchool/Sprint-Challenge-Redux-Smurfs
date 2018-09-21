/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
import { SMURF_FETCHING, SMURF_SUCCESS, SMURF_ERROR } from "../actions";



const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  succes: false,
  error: null
};

let index = 0;

const smurfReducers = (state = initalState, action) => {
  switch (action.type) {
    case SMURF_FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true});

    case SMURF_SUCCESS:
      const data = Object.assign({}, ...action.data, {id: index});
      index++;
      return Object.assign({}, state, {smurfs: [data], fetchingSmurfs: false});

    case SMURF_ERROR:
      return Object.assign({}, state, { fetchingSmurfs: false, error: 'Could not find smurfs.'});

    default:
      return state;
  }
};

export default smurfReducers;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
