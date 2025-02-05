import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const FilterButton = () => {
    return (
        <>
            <Button variant={'outlined'} endIcon={<SearchIcon />}>Filters</Button>
        </>
    )
};

export default FilterButton;