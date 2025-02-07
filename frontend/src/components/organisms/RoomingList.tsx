import { Box, Stack } from "@mui/material";
import TitleDivider from "../atoms/RoomingListCard/TitleDivider";
import CustomScrollbar from "../atoms/RoomingListCard/ScrollBarContainer";
import RoomingListCard from "../molecules/RoomingListCard";
import { RoomingListFetch } from "@/interfaces/roomingList";
import { useGlobalContext } from "@/context/GlobalContext";

type RoomingListProps = {
    data: RoomingListFetch[];
};

const RoomingList = ({ data }: RoomingListProps) => {
    const { selectedFilters } = useGlobalContext(); // Access selected filters

    const STATUS_TRANSLATIONS: Record<string, string> = {
        Active: "received",
        Closed: "completed",
        Canceled: "archived",
    };
    const translatedFilters = selectedFilters.map(filter => STATUS_TRANSLATIONS[filter] || filter);

    return (
        <>
            {data.length > 0 &&
                data.map((eventData, index) => {
                    const filteredRooms = eventData.data?.filter((room) =>
                        translatedFilters.length > 0 ? translatedFilters.includes(room.status) : true
                    );

                    return (
                        <Box key={index}>
                            <TitleDivider title={eventData.eventName} index={index} />
                            <CustomScrollbar>
                                <Stack direction={"row"} spacing={2} mt={2}>
                                    {filteredRooms?.map((room, roomIndex) => (
                                        <RoomingListCard key={roomIndex} {...room} />
                                    ))}
                                </Stack>
                            </CustomScrollbar>
                        </Box>
                    );
                })}
        </>
    );
};

export default RoomingList;
