import { Box, Divider, Stack, Typography } from "@mui/material";

interface TitleDividerProps {
    title: string
}

const TitleDivider = ({title}: TitleDividerProps) => {
    return (
        <Stack mt={4} >
            <Divider> 
                <Box sx={{padding: '4px 12px', background: '#E5F9F6', borderRadius: '8px', border: '2px solid #00C2A6', width: 'fit-content'}}>
                    <Typography sx={{color: '#00C2A6', fontWeight: '600', fontSize: '14px'}}>{title}</Typography>
                </Box>
            </Divider>  
        </Stack>
    )
};

export default TitleDivider;