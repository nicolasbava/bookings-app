import { Box, Stack, Typography } from "@mui/material";
import { parseCutoffDate } from "../../../utils";

interface CalendarCard {
    cutOffDate: string,
}

const CalendarCard = ({cutOffDate} : CalendarCard) => {
    const { day, month } = parseCutoffDate(cutOffDate);

    return (
        <Stack alignItems={'center'} >
        
            <Box sx={{width: 'fit-content'}}>
                <Typography sx={{
                    fontSize: '12px', 
                    fontWeight: '600', 
                    color: '#3E8CFF', 
                    background: '#3E8CFF40',
                    borderRadius: '8px 8px 0 0',
                    textAlign: 'center',
                    paddingInline: '16px'
                }}>
                    {month}
                </Typography>
                <Typography sx={{
                    fontSize: '26px', 
                    fontWeight: '700', 
                    color: '#3E8CFF', 
                    background: '#3E8CFF1A',
                    borderRadius: '0 0 8px 8px ',
                    textAlign: 'center',
                    lineHeight: '1.3'
                }}>
                    {day}
                </Typography>
            </Box>
            <Typography sx={{fontSize: '12px', color: '#777E90', mt: '4px', fontWeight: 500}}>Cut-Off Date</Typography>
        </Stack >
    )
};

export default CalendarCard;