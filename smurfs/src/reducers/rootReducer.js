/*
  Be sure to import in all of the action types from `../actions`
*/
import {LOADING, SUCCESS, ERROR} from '../actions/smurfActions'

const initialState = {

  smurfs: '',
  loading: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state=initialState, action) =>{
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case SUCCESS:
      return Object.assign({}, state, {loading: false, error: null, smurfs: action.payload})
    case ERROR:
      return Object.assign({}, state, {error: action.payload, loading: false})
    default:
      return state;
  }

}
export default rootReducer;