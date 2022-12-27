import {PositionActionsType} from "./positionActions";

export const positionReducer = (state: any = [], action: PositionActionsType): any => {
    switch (action.type) {
        case "ADD-POSITIONS":
            return action.payload.position;
        default:
            return state
    }
}