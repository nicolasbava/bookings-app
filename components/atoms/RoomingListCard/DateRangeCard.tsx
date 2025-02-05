import {  Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const DateRangeCard = () => {
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={1} >
        
            <FontAwesomeIcon color="#777E90" icon={faCalendar} />
            <Typography sx={{fontSize: '12px', color: '#777E90', marginTop: '4px', fontWeight: 400}}>Jan 31 - Feb 2, 2025</Typography>
        </Stack >
    )
};

export default DateRangeCard;