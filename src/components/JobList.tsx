import {JobPosition, JobPositionType} from './JobPosition';
import {useAppSelector} from "../store/hooks/hooks";
import {selectAllPosition} from "../store/reducers/positionsReducer/positionSelectors";

const JobList = () => {

    const data = useAppSelector(selectAllPosition)

    return (
        <div className='job-list'>
            {data.map((item: JobPositionType) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    )
}

export {JobList};