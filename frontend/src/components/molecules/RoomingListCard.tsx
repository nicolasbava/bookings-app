import { Grid2, Stack } from "@mui/material";
import TitleCard from "../atoms/RoomingListCard/TitleCard";
import SubtitleCard from "../atoms/RoomingListCard/SubtitleCard";
import CalendarCard from "../atoms/RoomingListCard/CalendarCard";
import DateRangeCard from "../atoms/RoomingListCard/DateRangeCard";
import ButtonBlue from "../atoms/ButtonBlue";
import OpenDocIcon from "../atoms/RoomingListCard/OpenDocIcon";
import { RoomingListItem } from "@/interfaces/roomingList";


const RoomingListCard = ({rfpName, agreement_type, cutOffDate, minDate, maxDate, roomingListBookings} : RoomingListItem) => {
    const handleOpenDocClick = () => {
        console.log("Rooming List Bookings:", roomingListBookings);
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