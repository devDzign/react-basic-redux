import { combineReducers } from "redux";
import authReducer from "./authReducer";
import actionInfoReducer from "./actionInfoReducer";

const rootReducer = combineReducers({
    rootAuth: authReducer,
    actionInfo: actionInfoReducer
});

export default rootReducer;
