import {combineReducers} from 'redux'
import {positionReducer} from "./positionsReducer/positionReducer";

export const rootReducer = combineReducers({
    positions: positionReducer
})