import data from '../mock/data.json';
import {JobPosition, JobPositionType} from './JobPosition';

export type DataType = {
    data: JobPositionType[]
}

const JobList = () => {
    return (
        <div className='job-list'>
            {data.map((item: JobPositionType) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    )
}

export {JobList};