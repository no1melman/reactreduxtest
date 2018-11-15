export const UNAUTHORISED = 'UNAUTHORISED';
export const SUCCESS = 'SUCCESS';

export function unauthorised() {
    return { type: UNAUTHORISED };
}

export function success() {
    return { type: SUCCESS };
}

export function unauthorisedReducer(state = false, action) {
    if (action.type === UNAUTHORISED) {
        return true;
    }

    if (action.type === SUCCESS && state) {
        return false;
    }

    return state;
}