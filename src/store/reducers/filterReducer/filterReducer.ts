import {AllFiltersActionsType} from "./filterActions";

export const filterReducer = (state: string[] = [], action: AllFiltersActionsType): string[] => {
    switch (action.type) {
        case "ADD-FILTER": {
            if (!state.includes(action.payload.filter)) {
                return [...state, action.payload.filter]
            }
            return state
        }
        case "REMOVE-FILTER": {
            return state.filter(stateItem => stateItem !== action.payload.filter)
        }
        case "CLEAR-FILTER": {
            return []
        }
        default: {
            return state
        }
    }
}