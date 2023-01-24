import {useEffect} from "react";
import {addPositions} from "./positions-slice";
import data from "../../mock/data.json";
import {useAppDispatch} from "../../app/hooks";

export  const useFetchPositions = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addPositions(data))
    }, [dispatch])
}