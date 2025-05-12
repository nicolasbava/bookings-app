'use client'
import { Box, Stack } from "@mui/material";
import Title from "../atoms/Title"
import SearchInput from "../atoms/SearchInput";
import FilterButton from "../atoms/Filter/FilterButton";
import { useState } from "react";
import FilterBox from "../atoms/Filter/FilterList";
import { RoomingListFetch } from "@/interfaces/roomingList";
import SwitchChangeOrder from "../atoms/Filter/SwitchChangeOrder";
import ButtonUploadJson from "../atoms/ButtonUploadJson";

interface HeaderProps {
    roomingLists?: RoomingListFetch[]
}

const Header = ({ roomingLists }: HeaderProps) => {
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    console.log('roomingList s', roomingLists)

    return (
        <Stack mt={2} spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'}>
                <Box mb={{ xs: 2, sm: 0 }}>
                    <Title />
                </Box>
                <ButtonUploadJson />
            </Stack>

            <Box display={{ xs: 'block', md: 'flex' }} gap={2}>
                <SearchInput roomingLists={roomingLists} />
                <Box  display={{ xs: 'flex' }}  gap={2}  mt={{xs: 2, md: 0}} >
                    <Box sx={{marginLeft: 'auto'}}>
                        <FilterButton setOpen={() => setOpenFilters(!openFilters)} open={openFilters} />
                        <FilterBox setOpen={setOpenFilters} open={openFilters} />
                    </Box>
                    <SwitchChangeOrder />
                </Box>
            </Box>


        </Stack>
    )
};

export default Header;