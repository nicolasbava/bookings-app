import { Box } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import Filters from "../atoms/Filter/Filters";

const Header = () => {
    return (
        <Box mt={2} ml={4}>
            <Title /> 

            <Box display={'flex'} gap={2}>
                <SearchInput />
                <Filters />
            </Box>

        </Box>
    )
};

export default Header;