import { success } from '../apiRedux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSuccess() {
    return { type: LOGIN_SUCCESS };
}

export function login() {
    return dispatch => new Promise(resolve => {
        setTimeout(() => {
            dispatch(success());
            dispatch(loginSuccess());
            resolve();
        }, 100);
    });
} 

const initialState = {
    loggedIn: false
};

export function loginReducer(state = initialState, action) {

    if (action.type === LOGIN_SUCCESS) {
        return { loggedIn: true };
    }

    return state;
}