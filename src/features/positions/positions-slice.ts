import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IPositions {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

const positionsSlice = createSlice({
    name: '@@positions',
    initialState: [] as IPositions[],
    reducers: {
        addPositions: (state, action: PayloadAction<IPositions[]>) => {
            return action.payload
        },
    },
});

export const selectVisiblePositions = (state: IPositions[] = [], filters: string[] = []): IPositions[] => {
    if (filters.length === 0) return state
    return state.filter((position) => {
        // Создаем массив для каждой позиции
        const posFilters: string[] = [position.role, position.level, ...position.languages, ...position.tools];
        return filters.every((filter) => posFilters.includes(filter))
    })
}

export const {addPositions} = positionsSlice.actions;
export const positionsReducer = positionsSlice.reducer;