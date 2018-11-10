import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  smurfs: [],
  fetching: false,
  error: "",
  // Array characters, Boolean fetching, null error.
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
     case FETCHING:
        return { ...state, fetching: true };
    case SUCCESS:
        return { ...state, smurfs: action.payload, fetching: false };
    case FAILURE:
        return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
