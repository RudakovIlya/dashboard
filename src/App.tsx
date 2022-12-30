import React, {useEffect} from 'react'
import {TheHeader} from "./components/TheHeader";
import {JobList} from "./components/JobList";
import {FilterPanel} from "./components/FilterPanel";
import {useAppDispatch} from "./store/hooks/hooks";
import {addPositionsAC} from "./store/reducers/positionsReducer/positionActions";
import data from './mock/data.json'

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addPositionsAC(data))
    }, [dispatch])

    return (
        <>
            <TheHeader/>
            <div className='container'>
                <FilterPanel/>
                <JobList/>
            </div>
        </>
    );
}

export default App;
