/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  ERROR_FETCHING_SMURFS
} from "./actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 }
*/
let initialState = {
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

export default ( state = initialState, action) => {
  switch (action.type) {

    case FETCHING_SMURFS:
      return Object.assign( {}, state, {fetching: true} );

    case FETCHED_SMURFS:
      return Object.assign( {}, state, {
        fetching: false,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case ERROR_FETCHING_SMURFS:
      return Object.assign( {}, state, {fetching: false, error: action.payload})

    default:
      return state;
  }
}