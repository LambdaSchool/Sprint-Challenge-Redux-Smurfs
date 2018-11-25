/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  FETCHED,
  ADDING,
  ADDED,
  UPDATING,
  DELETING,
  ERROR
} from "../actions";

/*
   Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: ""
    }
  ],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
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
export default (state = { initialState }, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: true,
        error: null
      };
    case ADDING:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: true
      };
    case ADDED:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: false,
        smurfAdded: true
      };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.errorMessage
      };
    default:
      return state;
  }
};
