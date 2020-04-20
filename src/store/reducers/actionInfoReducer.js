import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
};

const authReducer = (state= initialState , action) => {

    switch (action.type) {
        case actionTypes.INCREMENT_ACTION_COUNT :
            return {...state, counter: state.counter +1 }
        default :
            return state
    }

};

export default authReducer;