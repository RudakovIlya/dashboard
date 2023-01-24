import {Badge} from "../../UI/Badge";
import {Card} from "../../UI/Card";
import {Stack} from "../../UI/Stack";
import {FC, memo} from "react";
import {IPositions} from "./positions-slice";

type JobPositionPropsType = {
    jobPosition: IPositions
    handleAddFilter: (filter: string) => void
}

const JobPosition: FC<JobPositionPropsType> = memo(({
                                                        jobPosition, handleAddFilter
                                                    }) => {
    const {
        company,
        logo,
        new: isNew,
        position,
        role,
        featured,
        languages,
        level,
        postedAt,
        contract,
        location,
        tools
    } = jobPosition
    const badges = [role, level, ...languages, ...tools];

    return (
        <Card isFeatured={featured}>
            <div className='job-position'>
                <div className='job-position-info'>
                    <img
                        className='job-position-avatar'
                        src={logo}
                        alt={company}
                    />
                    <div className='job-position-body'>
                        <div className='job-postion-company'>
                            <h3>{company}</h3>
                            {(isNew || featured) && (
                                <Stack pos={''}>
                                    {isNew && (
                                        <Badge variant="rounded" colorScheme="primary">
                                            NEW!
                                        </Badge>
                                    )}
                                    {featured && (
                                        <Badge variant="rounded" colorScheme="dark">
                                            FEATURED
                                        </Badge>
                                    )}
                                </Stack>
                            )}
                        </div>
                        <h2 className='job-position-title'>
                            {position}
                        </h2>
                        <Stack pos={''}>
                            <div className='job-position-meta'>
                                {postedAt}
                            </div>
                            <div className='job-position-meta'>
                                {contract}
                            </div>
                            <div className='job-position-meta'>
                                {location}
                            </div>
                        </Stack>
                    </div>
                </div>
                <Stack pos={''}>
                    {badges.map(item => (
                        <Badge onClick={() => handleAddFilter(item)} key={item}>{item}</Badge>
                    ))}
                </Stack>
            </div>
        </Card>
    )
})

export {JobPosition};
