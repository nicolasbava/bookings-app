/* eslint-disable @next/next/no-img-element */
import {  Stack, Typography } from "@mui/material";
import { formatDateRange } from "../../../utils";

interface DateRangeCardProps {
    checkInDate: string,
    checkOutDate: string
}
const DateRangeCard = ({checkInDate, checkOutDate} : DateRangeCardProps) => {
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={1} >
            <img style={{maxWidth: '12px', marginTop: '-2px'}} src="/calendar.png" alt="open doc icon" />
            <Typography sx={{fontSize: '12px', color: '#777E90', fontWeight: 400}}>{formatDateRange(checkInDate, checkOutDate)} </Typography>
        </Stack >
    )
};

export default DateRangeCard;