import {incrementCounter} from "../store/actions/actions"
import * as actionType from '../store/actions/actionTypes'

export const actionCounter = (store) => (next) => (action) => {
            if(actionType.INCREMENT_ACTION_COUNT !== action.type) {
                store.dispatch(incrementCounter())
            }
            next(action)
}