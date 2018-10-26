import { FETCH_SMURFS, ADD_SMURF, DELETE_SMURF, EDIT_SMURF } from '../actions/types';

export const smurfsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return action.payload || false;
    case ADD_SMURF:
      return action.payload || false;
    case DELETE_SMURF:
      return action.payload || false;
    case EDIT_SMURF:
      return action.payload || false;
    default:
      return state;
  }
};
