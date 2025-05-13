'use client'
import { Box, Stack, Typography } from "@mui/material";
import TitleDivider from "../atoms/RoomingListCard/TitleDivider";
import CustomScrollbar from "../atoms/RoomingListCard/ScrollBarContainer";
import RoomingListCard from "../molecules/RoomingListCard";
import { RoomingListFetch } from "../../interfaces/roomingList";
import { useGlobalContext } from "../../context/GlobalContext";

type RoomingListProps = {
    data: RoomingListFetch[];
};

const RoomingList = ({ data }: RoomingListProps) => {
    const { selectedFilters, orderAscendent } = useGlobalContext(); // Access selected filters

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

                    const sortedRooms = [...filteredRooms].sort((a, b) => {
                    const dateA = new Date(a.cutOffDate).getTime();
                    const dateB = new Date(b.cutOffDate).getTime();
                    return orderAscendent ? dateA - dateB : dateB - dateA;
                    });

                    return (
                        <Box key={index}>
                            <TitleDivider title={eventData.eventName} index={index} />
                            {sortedRooms.length === 0 ?  <Typography fontWeight={'bold'} mt={2}>No bookings found</Typography> : 
                                <CustomScrollbar>
                                    <Stack direction={"row"} spacing={2} mt={2}>
                                        {sortedRooms?.map((room, roomIndex) => (
                                            <RoomingListCard key={roomIndex} {...room} />
                                        ))}
                                    </Stack>
                                </CustomScrollbar>
                            }
                        </Box>
                    );
                })}
        </>
    );
};

export default RoomingList;
