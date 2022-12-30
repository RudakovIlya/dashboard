export const addFilterAC = (filter: string) => {
    return {
        type: 'ADD-FILTER',
        payload: {
            filter
        }
    } as const
};

export const removeFilterAC = (filter: string) => {
    return {
        type: 'REMOVE-FILTER',
        payload: {
            filter
        }
    } as const
};

export const clearFilterAC = () => {
    return {
        type: 'CLEAR-FILTER',
    } as const
};

export type AllFiltersActionsType =
    ReturnType<typeof addFilterAC>
    | ReturnType<typeof removeFilterAC>
    | ReturnType<typeof clearFilterAC>