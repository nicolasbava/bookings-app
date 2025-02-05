'use client'
import { Box, Stack } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import FilterButton from "../atoms/Filter/FilterButton";
import { useState } from "react";
import FilterBox from "../atoms/Filter/FilterBox";

const Header = () => {
    const [openFilters, setOpenFilters] = useState<boolean>(true);
    
    return (
        <Stack mt={2} spacing={4}>
            <Title /> 
            <Box display={'flex'} sx={{position: 'relative'}} gap={2}>
                <SearchInput />
                <FilterButton setOpen={() => setOpenFilters(!openFilters)}  open={openFilters} />
            </Box>
            <FilterBox open={openFilters} />


        </Stack>
    )
};

export default Header;