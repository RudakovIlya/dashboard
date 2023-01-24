import {Badge} from "../../UI/Badge";
import {Card} from "../../UI/Card";
import {Stack} from "../../UI/Stack";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {clearFilter, removeFilter, selectFilters} from "./filter-slice";

const FilterPanel = () => {

    const dispatch = useAppDispatch();

    const currentFilters = useAppSelector(selectFilters);

    return (

        currentFilters.length ? <Card className="filter-panel">
                <div className="filter-panel-wrapper">
                    <Stack  pos={'center'}>
                        {currentFilters.map(filter => {
                            return (
                                <Badge key={filter} onClear={() => dispatch(removeFilter(filter))}
                                       variant="clearable">{filter}</Badge>
                            )
                        })}
                    </Stack>

                    <button onClick={() => dispatch(clearFilter())} className='link'>Clear</button>
                </div>
            </Card>
            :
            <></>

    )
}

export {FilterPanel};