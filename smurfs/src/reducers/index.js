import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  GET_SINGLE_SMURF,
  GET_SINGLE_SMURF_SUCCESS,
  GET_SINGLE_SMURF_FAILURE
} from "../actions";
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
  fetchingSmurfs: false,
  updatingSmurf: false,
  smurfs: [],
  singleSmurf: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case GET_SINGLE_SMURF:
      return {
        ...state,
        error: null,
        updatingSmurf: true
      };
    case GET_SINGLE_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        singleSmurf: action.payload
      };
    case GET_SINGLE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      };
    case EDIT_SMURF:
      return {
        ...state,
        error: null
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        singleSmurf: {},
        error: null
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      };
    default:
      return state;
  }
};

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.import { getSingleSmurf } from '../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
