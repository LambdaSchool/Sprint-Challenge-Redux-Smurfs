import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS } from "../actions";

const initialState = {
  pending: false,
  error: null,
  smurfs: []
};

export const smurfsReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case PENDING_SMURFS:
      return Object.assign({}, state, { pending: true });
    case SUCCESS_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        smurfs: action.payload
      });
    case ERROR_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

