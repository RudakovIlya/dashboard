import {Badge} from "../UI/Badge";
import {Card} from "../UI/Card";
import {Stack} from "../UI/Stack";
import {FC} from "react";

export type JobPositionType = {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}


const JobPosition: FC<JobPositionType> = ({
                                              id,
                                              company,
                                              logo,
                                              new: isNew,
                                              featured,
                                              position,
                                              role,
                                              level,
                                              postedAt,
                                              contract,
                                              location,
                                              languages,
                                              tools,
                                          }) => {
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
                        <Badge key={item}>{item}</Badge>
                    ))}
                </Stack>
            </div>
        </Card>
    )
}

export {JobPosition};
