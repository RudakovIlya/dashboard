import {useEffect} from "react";
import {addPositions} from "./positions-slice";
import data from "../../mock/data.json";
import {useAppDispatch} from "../../app/hooks";

export const useFetchPositions = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(addPositions(data)), 1000)
    }, [dispatch])
}