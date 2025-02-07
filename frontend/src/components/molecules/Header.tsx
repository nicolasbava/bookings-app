'use client'
import { Box, Stack } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import FilterButton from "../atoms/Filter/FilterButton";
import { useState } from "react";
import FilterBox from "../atoms/Filter/FilterList";
import { RoomingListFetch } from "@/interfaces/roomingList";
import UploadJson from "../atoms/UploadJson";

interface HeaderProps {
    roomingLists?: RoomingListFetch[]
}

const Header = ({roomingLists} : HeaderProps ) => {
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    console.log('roomingList s', roomingLists)
    
    return (
        <Stack mt={2} spacing={4}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Title />
                <UploadJson />

            </Stack>
            <Box display={'flex'}  gap={2}>
                <SearchInput roomingLists={roomingLists} />
                <Box sx={{position: 'relative'}}>
                    <FilterButton setOpen={() => setOpenFilters(!openFilters)}  open={openFilters} />
                    <FilterBox setOpen={setOpenFilters} open={openFilters} />
                </Box>
            </Box>


        </Stack>
    )
};

export default Header;