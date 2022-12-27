export const addPositions = (position: string) => {
    return {
        type: 'ADD-POSITIONS',
        payload: {
            position
        }
    } as const
}

export type PositionActionsType = ReturnType<typeof addPositions>