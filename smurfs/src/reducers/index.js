import { FETCHING_SMURFS, FETCH_SMURFS, ADDING_SMURF, ADD_SMURF, UPDATING_SMURF, UPDATE_SMURF, DELETING_SMURF, DELETE_SMURF, ERROR } from '../actions'
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
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
    return Object.assign({}, state, {
      fetchingSmurfs: true,
    });
    case FETCH_SMURFS:
    return Object.assign({}, state, {
      smurfs: action.payload,
      fetchingSmurfs: false,
    });
    case ADDING_SMURF:
    return Object.assign({}, state, {
      addingSmurf: true,
    });
    case ADD_SMURF:
    return Object.assign({}, state, {
      smurfs: action.payload,
      addingSmurf: false,
    });
    case UPDATING_SMURF:
    return Object.assign({}, state, {
      updatingSmurf: true,
    });
    case UPDATE_SMURF:
    return Object.assign({}, state, {
      updatingSmurf: false,
      smurfs: action.payload,
    });
    case DELETING_SMURF:
    return Object.assign({}, state, {
      deletingSmurf: true,
    });
    case DELETE_SMURF:
    return Object.assign({}, state, {
      smurfs: action.payload,
    });
    case ERROR:
    return Object.assign({}, state, {
      error: action.payload,
    })
    default:
      return state;
  }
}

export default smurfReducer