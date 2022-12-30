import {JobPositionType} from "../../../components/JobPosition";

export const addPositionsAC = (positions: JobPositionType[]) => {
    return {
        type: 'ADD-POSITIONS',
        payload: {
            positions
        }
    } as const
}

export type PositionActionsType = ReturnType<typeof addPositionsAC>