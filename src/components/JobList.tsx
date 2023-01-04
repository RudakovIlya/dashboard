import {JobPosition} from './JobPosition';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {addFilterAC} from "../store/reducers/filterReducer/filterActions";
import {JobPositionType} from "../store/reducers/positionsReducer/positionReducer";
import {useCallback} from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {selectVisiblePositions} from "../store/reducers/positionsReducer/positionSelectors";

const JobList = () => {

    const data = useAppSelector((state) => selectVisiblePositions(state.positions, state.filters))
    const dispatch = useAppDispatch();

    const handleAddFilter = useCallback((filter: string) => {
        dispatch(addFilterAC(filter))
    }, [dispatch])

    const [jobList] = useAutoAnimate<HTMLDivElement>()

    return (
        <div ref={jobList} className='job-list'>
            {data.map((jobPosition: JobPositionType) => (
                <JobPosition
                    handleAddFilter={handleAddFilter}
                    key={jobPosition.id}
                    jobPosition={jobPosition}/>
            ))}
        </div>
    )
}

export {JobList};