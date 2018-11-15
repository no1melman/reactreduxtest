import {combineReducers} from 'redux';
import { profileReducer } from './profile';
import { unauthorisedReducer } from './apiRedux';

const rootReducer = combineReducers({
    profile: profileReducer,
    unauthorised: unauthorisedReducer
});

export default rootReducer;