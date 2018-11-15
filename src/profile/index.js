import { unauthorised, success } from '../apiRedux';

export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';

let counter = 0;

export function loadProfile() {
    return dispatch => {
        dispatch({ type: LOAD_PROFILE });
        
        return new Promise(resolve => {

            setTimeout(() => {
                console.log(counter);

                if (counter === 0) {
                    dispatch(unauthorised());
                    dispatch(loadProfileFailure());
                } else {
                    dispatch(success());
                    dispatch(loadProfileSuccess());
                }

                counter ++;
                resolve();
            });

        });
    };
}

export function loadProfileSuccess(profile) {
    return { type: LOAD_PROFILE_SUCCESS, profile };
}

export function loadProfileFailure() {
    return { type: LOAD_PROFILE_FAILURE };
}

const initialState = {
    loading: false,
    loaded: false,
    profile: {}
};

export function profileReducer(state = initialState, action) {
    
    if (action.type === LOAD_PROFILE) {
        return { loading: true, loaded: false, profile: {} };
    }

    if (action.type === LOAD_PROFILE_SUCCESS) {
        return { loading: false, loaded: true, profile: action.profile };
    }

    if (action.type === LOAD_PROFILE_FAILURE) {
        return { loading: false, loaded: false, profile: {} };
    }

    return state;
}