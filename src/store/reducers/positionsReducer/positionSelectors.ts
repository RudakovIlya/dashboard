import {JobPositionType} from "./positionReducer";

export const selectVisiblePositions = (state: JobPositionType[] = [], filters: string[] = []): JobPositionType[] => {
    if (filters.length === 0) return state
    return state.filter((position) => {
        // Создаем массив для каждой позиции
        const posFilters: string[] = [position.role, position.level, ...position.languages, ...position.tools];
        return filters.every((filter) => posFilters.includes(filter))
    })
}