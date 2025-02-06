import { Grid2, Stack } from "@mui/material";
import TitleCard from "../atoms/RoomingListCard/TitleCard";
import SubtitleCard from "../atoms/RoomingListCard/SubtitleCard";
import CalendarCard from "../atoms/RoomingListCard/CalendarCard";
import DateRangeCard from "../atoms/RoomingListCard/DateRangeCard";
import ButtonBlue from "../atoms/ButtonBlue";
import OpenDocIcon from "../atoms/RoomingListCard/OpenDocIcon";
;

interface RoomingListCardProps {
    rpf_name: string,
    id: string,
    from_date: string,
    to_date: string,
    bookings: number,
    agreement: string,
    cutoff_date: string
}

const RoomingListCard = ({rpf_name, bookings, agreement, from_date, to_date, cutoff_date} : RoomingListCardProps) => {
    return (
        <Grid2 columnSpacing={0.5} container sx={{padding: '16px 16px', borderRadius: '8px', border: '2px solid #E4ECF2', background: 'white', minWidth: '400px'}}>
            <Grid2 size={9}>
                <TitleCard>{rpf_name}</TitleCard>
                <SubtitleCard>{agreement}</SubtitleCard>
            </Grid2>
            <Grid2 size={3}>
                <CalendarCard cutoff_date={cutoff_date} />
            </Grid2>
            <Grid2 size={12} mb={2}>
                <DateRangeCard from_date={from_date} to_date={to_date} />
            </Grid2>
            <Grid2 size={12}>
                <Stack direction='row' spacing={1}>
                    <ButtonBlue>{`View Bookings (${JSON.stringify(bookings)})`}</ButtonBlue>
                    <OpenDocIcon />
                </Stack>
            </Grid2>
           
        </Grid2>
    )
};

export default RoomingListCard;