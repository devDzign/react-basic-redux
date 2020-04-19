export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';


export const authenticationToggle = (isLogin) => {
    return { type: SET_AUTHENTICATION, isLoggedIn: isLogin }
}