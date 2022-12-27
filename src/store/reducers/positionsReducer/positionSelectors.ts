import {RootStateType} from "../../store";

export const selectAllPositions = (state: RootStateType) => state.positions

export const selectVisiblePositions = (state: RootStateType, filters: any[] = []) => {
    if (filters.length === 0) return state.positions
}