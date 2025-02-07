import { Box, Stack } from "@mui/material";
import TitleDivider from "../atoms/RoomingListCard/TitleDivider"
import CustomScrollbar from "../atoms/RoomingListCard/ScrollBarContainer";
import RoomingListCard from "../molecules/RoomingListCard";
import { RoomingListFetch } from "@/interfaces/roomingList";

type RoomingListProps = {
    data: RoomingListFetch[]
}

const RoomingList = ({ data } : RoomingListProps) => {
    return (
        <>
            {data.length > 0 && data.map((eventData, index) => (
            <Box key={index}>
                <TitleDivider title={eventData.eventName} index={index} />
                {/* {console.log('ev', eventData.data)} */}
                <CustomScrollbar>
                <Stack direction={'row'} spacing={2} mt={2}>
                    {eventData.data?.map((room, roomIndex) => (
                        <RoomingListCard key={roomIndex} {...room} />
                    ))}
                </Stack>
                </CustomScrollbar>
            </Box>
            ))}
        </>
    )
};

export default RoomingList