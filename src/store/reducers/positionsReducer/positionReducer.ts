import {PositionActionsType} from "./positionActions";

export type JobPositionType = {
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

export const positionReducer = (state: JobPositionType[] = [], action: PositionActionsType): JobPositionType[] => {
    switch (action.type) {
        case "ADD-POSITIONS":
            return action.payload.positions;
        default:
            return state
    }
}