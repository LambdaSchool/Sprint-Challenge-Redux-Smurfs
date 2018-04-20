import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR_SMURFS } from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  // addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurfs: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCHING_SMURFS:
        return Object.assign({}, state, { 
          fetching: true 
        });
      case FETCHED_SMURFS:
        return Object.assign({}, state, { 
          fetching: false, 
          smurfs: [...action.payload] 
        });
      case ERROR_SMURFS:
        return Object.assign({}, state, { 
          pending: false, 
          error: action.payload 
        });
      default:
        return state;
    }
}

export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
