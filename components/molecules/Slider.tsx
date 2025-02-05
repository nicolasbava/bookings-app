import { Stack } from "@mui/material";
import RoomingListCard from "../atoms/RoomingListCard";
import TitleDivider from "../atoms/RoomingListCard/TitleDivider"
import CustomScrollbar from "../atoms/RoomingListCard/ScrollBarContainer";

const Slider = () => {
    return (
        <>
            <TitleDivider title={'Austin City Limits'} />
            <CustomScrollbar>
                <Stack direction={'row'} spacing={2} mt={2} >
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                    {/* <RoomingListCard />
                    <RoomingListCard /> */}
                </Stack>
            </CustomScrollbar>

            <TitleDivider title={'Ultra Music Festival'} />
            <CustomScrollbar>
                <Stack direction={'row'} spacing={2} mt={2} >
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                        <RoomingListCard />
                    {/* <RoomingListCard />
                    <RoomingListCard /> */}
                </Stack>
            </CustomScrollbar>
        </>
    )
};

export default Slider