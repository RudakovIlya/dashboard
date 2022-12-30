import {JobPosition} from './JobPosition';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {selectVisiblePositions} from "../store/reducers/positionsReducer/positionSelectors";
import {addFilterAC} from "../store/reducers/filterReducer/filterActions";
import {JobPositionType} from "../store/reducers/positionsReducer/positionReducer";

const JobList = () => {

    const data = useAppSelector((state) => selectVisiblePositions(state.positions, state.filters))
    const dispatch = useAppDispatch();
    console.log(data)
    const handleAddFilter = (filter: string) => {
        dispatch(addFilterAC(filter))
    }

    return (
        <div className='job-list'>
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