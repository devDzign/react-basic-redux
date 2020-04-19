import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    rootAuth: authReducer
});

export default rootReducer;
