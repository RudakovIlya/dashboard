import {PositionActionsType} from "./positionActions";
import {JobPositionType} from "../../../components/JobPosition";

export const positionReducer = (state: JobPositionType[] = [], action: PositionActionsType): JobPositionType[] => {
    switch (action.type) {
        case "ADD-POSITIONS":
            return action.payload.positions;
        default:
            return state
    }
}