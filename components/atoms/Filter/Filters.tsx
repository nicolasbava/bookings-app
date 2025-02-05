import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Filters = () => {
    return (
        <>
            <Button variant={'outlined'} endIcon={<SearchIcon />}>Filters</Button>
        </>
    )
};

export default Filters;