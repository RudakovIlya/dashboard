import {Badge} from "../UI/Badge";
import {Card} from "../UI/Card";
import {Stack} from "../UI/Stack";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {selectFilters} from "../store/reducers/filterReducer/filterSelectors";
import {clearFilterAC, removeFilterAC} from "../store/reducers/filterReducer/filterActions";

const FilterPanel = () => {

    const dispatch = useAppDispatch();

    const currentFilters = useAppSelector(selectFilters);

    return (

        currentFilters.length ? <Card className="filter-panel">
                <div className="filter-panel-wrapper">
                    <Stack pos={'center'}>
                        {currentFilters.map(filter => {
                            return (
                                <Badge key={filter} onClear={() => dispatch(removeFilterAC(filter))}
                                       variant="clearable">{filter}</Badge>
                            )
                        })}
                    </Stack>

                    <button onClick={() => dispatch(clearFilterAC())} className='link'>Clear</button>
                </div>
            </Card>
            :
            <></>

    )
}

export {FilterPanel};