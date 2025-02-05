import { Grid2 } from "@mui/material";
import TitleCard from "./TitleCard";
import SubtitleCard from "./SubtitleCard";
import CalendarCard from "./CalendarCard";
import DateRangeCard from "./DateRangeCard";
import ButtonBlue from "../ButtonBlue";
import OpenDocIcon from "./OpenDocIcon";

const RoomingListCard = () => {
    return (
        <Grid2 columnSpacing={2} container sx={{padding: '16px 16px', borderRadius: '8px', border: '2px solid #E4ECF2', background: 'white', minWidth: '400px'}}>
            <Grid2 size={9}>
                <TitleCard></TitleCard>
                <SubtitleCard></SubtitleCard>
            </Grid2>
            <Grid2 size={3}>
                <CalendarCard />
            </Grid2>
            <Grid2 size={12} mb={2}>
                <DateRangeCard />
            </Grid2>
            <Grid2 size={10} >
                <ButtonBlue>View Bookings (12)</ButtonBlue>
            </Grid2>
            <Grid2 size={2}>
                <OpenDocIcon />
            </Grid2>
        </Grid2>
    )
};

export default RoomingListCard;