import {JobPosition} from './JobPosition';
import {useAppDispatch} from "../../app/hooks";
import {useCallback} from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {IPositions} from "./positions-slice";
import {addFilter} from '../filter/filter-slice';
import {usePositions} from "./usePositions";
import {useFetchPositions} from "./useFetchPositions";


const JobList = () => {

    useFetchPositions();

    const positions = usePositions();

    const dispatch = useAppDispatch();

    const handleAddFilter = useCallback((filter: string) => {
        dispatch(addFilter(filter))
    }, [dispatch])

    const [jobList] = useAutoAnimate<HTMLDivElement>()

    return (
        <div ref={jobList} className='job-list'>
            {positions.map((jobPosition: IPositions) => (
                <JobPosition
                    handleAddFilter={handleAddFilter}
                    key={jobPosition.id}
                    jobPosition={jobPosition}/>
            ))}
        </div>
    )
}

export {JobList};