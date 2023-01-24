import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootStateType} from "../../app/store";

const initialState: string[] = [];

const filterSlice = createSlice({
    name: '@@filter',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
            return state
        },
        removeFilter: (state, action: PayloadAction<string>) => {
            return state.filter(stateItem => stateItem !== action.payload)
        },
        clearFilter: () => [],
    },
});

export const selectFilters = (state: RootStateType) => state.filter

export const {addFilter, removeFilter, clearFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;