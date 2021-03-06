import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false
};

const authReducer = (state= initialState , action) => {
    console.log("action :", action.type)
    if (action.type === actionTypes.SET_AUTHENTICATION) {
        console.log('Reducers :', action)
        return {...state, isAuth: action.isLoggedIn}
    } else {
        return state;
    }
};

export default authReducer;