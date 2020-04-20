import * as actionType from './actionTypes'
import loginUser from "../../api/loginUser";

export const setAuthentication = (isLoggedIn) => {
    return {
            type: actionType.SET_AUTHENTICATION,
            isLoggedIn: isLoggedIn
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


const userLogin = user =>{
    localStorage.setItem('user', JSON.stringify(user));
}

const userLogout = () => {
    // setUser({
    //     username: null,
    //     token: null
    // });
    localStorage.removeItem('user');
}

const getUserFromLocalStorage =  () => {
    return localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) :  {
        username: null,
        token: null
    }
}

export const signinUser = ({email, password}, history) => {
    return async (dispatch) => {
        let response = await loginUser({email, password});
        if (response) {
            const {jwt: token, user: {username}} = response.data;
            const newUser = {token, username};
            userLogin(newUser);
            dispatch(setAuthentication(true))
            history.push("/resources");

        } else {
            userLogout();
            dispatch(setAuthentication(false))
            history.push("/resources");

        }

    }
}



