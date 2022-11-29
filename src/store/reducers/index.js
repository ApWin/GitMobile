import { combineReducers } from 'redux';
import {LOGOUT} from "../constants";

/* ------------- Reducers ------------- */

import profile from "./profile";

/* ------------- Reducers ------------- */

const rootReducer = combineReducers({
    profile
});

export default (state, action) => (
    // action.type === LOGOUT ? rootReducer(undefined, action) : rootReducer(state, action)
    rootReducer(state, action)
)
