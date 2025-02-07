'use client'
import { Box, Stack } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import FilterButton from "../atoms/Filter/FilterButton";
import { useState } from "react";
import FilterBox from "../atoms/Filter/FilterList";
import { RoomingListFetch } from "@/interfaces/roomingList";

interface HeaderProps {
    roomingLists: RoomingListFetch['data']
}

const Header = ({roomingLists} : HeaderProps ) => {
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    
    return (
        <Stack mt={2} spacing={4}>
            <Title /> 
            <Box display={'flex'}  gap={2}>
                <SearchInput roomingListBookings={roomingLists} onSelect={(selected) => console.log("Selected:", selected)}  />
                <Box sx={{position: 'relative'}}>
                    <FilterButton setOpen={() => setOpenFilters(!openFilters)}  open={openFilters} />
                    <FilterBox setOpen={setOpenFilters} open={openFilters} />
                </Box>
            </Box>


        </Stack>
    )
};

export default Header;