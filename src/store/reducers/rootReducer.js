import { combineReducers } from "redux";
import authReducer from "./authReducer";
import actionInfoReducer from "./actionInfoReducer";
import { reducer as formReducer  } from "redux-form"

const rootReducer = combineReducers({
    form: formReducer,
    rootAuth: authReducer,
    actionInfo: actionInfoReducer
});

export default rootReducer;
