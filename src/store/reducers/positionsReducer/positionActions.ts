import {JobPositionType} from "./positionReducer";

export const addPositionsAC = (positions: JobPositionType[]) => {
    return {
        type: 'ADD-POSITIONS',
        payload: {
            positions
        }
    } as const
}

export type PositionActionsType = ReturnType<typeof addPositionsAC>