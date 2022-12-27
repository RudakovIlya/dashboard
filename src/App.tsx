import React from 'react'
import {TheHeader} from "./components/TheHeader";
import {JobList} from "./components/JobList";
import {FilterPanel} from "./components/FilterPanel";


function App() {
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
