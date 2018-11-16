import {combineReducers} from 'redux';
import { profileReducer } from './profile';
import { unauthorisedReducer } from './apiRedux';
import { loginReducer } from './login';

const rootReducer = combineReducers({
    profile: profileReducer,
    unauthorised: unauthorisedReducer,
    login: loginReducer
});

export default rootReducer;