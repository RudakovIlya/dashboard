import {RootStateType} from "../../store";
import {JobPositionType} from "../../../components/JobPosition";

export const selectAllPosition = (state: RootStateType) => {
    return state.positions
}

export const selectVisiblePositions = (state: RootStateType, filters: string[] = []): JobPositionType[] => {
    if (filters.length === 0) return state.positions
    return state.positions.filter((position) => {
        const posFilters: string[] = [position.role, position.level, ...position.languages, ...position.tools];
        return filters.every((filter: string) => posFilters.includes(filter))
    })
}