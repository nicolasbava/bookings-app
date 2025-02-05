'use client'
import { Box } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import FilterButton from "../atoms/Filter/FilterButton";
import { useState } from "react";
import FilterBox from "../atoms/Filter/FilterBox";

const Header = () => {
    const [openFilters, setOpenFilters] = useState<boolean>(false)
    return (
        <Box mt={2} ml={4}>
            <Title /> 
            <Box display={'flex'} gap={2}>
                <SearchInput />
                <FilterButton />
                <FilterBox open={openFilters} />

            </Box>


        </Box>
    )
};

export default Header;