import { Grid2, Stack } from "@mui/material";
import TitleCard from "../atoms/RoomingListCard/TitleCard";
import SubtitleCard from "../atoms/RoomingListCard/SubtitleCard";
import CalendarCard from "../atoms/RoomingListCard/CalendarCard";
import DateRangeCard from "../atoms/RoomingListCard/DateRangeCard";
import ButtonBlue from "../atoms/ButtonBlue";
import OpenDocIcon from "../atoms/RoomingListCard/OpenDocIcon";
import { RoomingListItem } from "@/interfaces/roomingList";


const RoomingListCard = ({rfpName, agreement_type, cutOffDate, minDate, maxDate, roomingListBookings, roomingListId} : RoomingListItem) => {
    const handleOpenDocClick = async () => {
        console.log("Fetching bookings for Rooming List ID:", roomingListId);

        try {
            const response = await fetch(`http://localhost:3002/rooming-list-booking/${roomingListId}`);
            if (!response.ok) throw new Error("Failed to fetch bookings");

            const data = await response.json();
            console.log("=====================");
            console.log("Fetched Bookings for Rooming List ID:", roomingListId);
            console.log("Data:", data);
            console.log("=====================");

        } catch (error) {
            console.error("Error fetching rooming list bookings:", error);
        }
    };

    
    return (
        <Grid2 columnSpacing={0.5} container sx={{padding: '16px 16px', borderRadius: '8px', border: '2px solid #E4ECF2', background: 'white', minWidth: '400px', maxWidth: '410px'}}>
            <Grid2 size={9}>
                <TitleCard>{rfpName}</TitleCard>
                <SubtitleCard>{agreement_type}</SubtitleCard>
            </Grid2>
            <Grid2 size={3}>
                <CalendarCard cutOffDate={cutOffDate} />
            </Grid2>
            <Grid2 size={12} mb={2}>
                <DateRangeCard checkInDate={minDate} checkOutDate={maxDate} />
            </Grid2>
            <Grid2 size={12}>
                <Stack direction='row' spacing={1}>
                    <ButtonBlue onClick={handleOpenDocClick}>{`View Bookings (${JSON.stringify(roomingListBookings.length)})`}</ButtonBlue>
                    <OpenDocIcon />
                </Stack>
            </Grid2>
           
        </Grid2>
    )
};

export default RoomingListCard;