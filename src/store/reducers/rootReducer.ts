import {combineReducers} from 'redux'
import {positionReducer} from "./positionsReducer/positionReducer";
import {filterReducer} from "./filterReducer/filterReducer";

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
});

export type TRootReducer = ReturnType<typeof rootReducer>;