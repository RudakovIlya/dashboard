import {TheHeader} from "./components/TheHeader";
import {JobList} from "./features/positions/JobList";
import {FilterPanel} from "./features/filter/FilterPanel";
import {useFetchPositions} from "./features/positions/useFetchPositions";

function App() {
    useFetchPositions();
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
