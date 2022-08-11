import { combineReducers } from "redux";
import AuthReducer from './auth';
import GlobalReducer from './global';

const reducers = combineReducers({
    auth: AuthReducer,
    global: GlobalReducer
})

export default reducers;