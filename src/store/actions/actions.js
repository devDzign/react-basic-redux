import * as actionType from './actionTypes'

export const setAuthentication = (isLoggedIn) => {
    return (dispatch) => {
        dispatch({
            type: actionType.SET_AUTHENTICATION,
            isLoggedIn: isLoggedIn
        })
    }
}

export const incrementCounter = () => {
    return (dispatch) => {
        dispatch({
            type: actionType.INCREMENT_ACTION_COUNT,
           payload: {}
        })
    }
}




