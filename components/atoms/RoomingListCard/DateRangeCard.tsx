import {  Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { formatDateRange } from "../../../utils";

interface DateRangeCardProps {
    from_date: string,
    to_date: string
}
const DateRangeCard = ({from_date, to_date} : DateRangeCardProps) => {
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={1} >
        
            <FontAwesomeIcon color="#777E90" icon={faCalendar} />
            <Typography sx={{fontSize: '12px', color: '#777E90', marginTop: '4px', fontWeight: 400}}>{formatDateRange(from_date, to_date)} </Typography>
        </Stack >
    )
};

export default DateRangeCard;