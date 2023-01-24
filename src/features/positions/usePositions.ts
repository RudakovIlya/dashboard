import {useAppSelector} from "../../app/hooks";

import {selectVisiblePositions} from "./positions-slice";

export const usePositions = () => {
    return useAppSelector((state) => selectVisiblePositions(state.positions, state.filter));
}