import { Box, Divider, Stack, Typography } from "@mui/material";
import { getColorByIndex } from "../../../utils";

interface TitleDividerProps {
    title: string,
    index: number
}

const TitleDivider = ({title, index}: TitleDividerProps) => {
    const { background, border, color } = getColorByIndex(index);
// '#E5F9F6' '2px solid #00C2A6' '#00C2A6'
    return (
        <Stack mt={4} >
             <Divider
                sx={{
                position: "relative",
                "&::before": {
                    content: '""',
                    flex: 1,
                    height: "2px",
                    background: `linear-gradient(to left, ${color}, #f9fbff)`, // Green to Grey
                    borderTop: 'none'
                },
                "&::after": {
                    content: '""',
                    flex: 1,
                    height: "2px",
                    background: `linear-gradient(to right, ${color}, #f9fbff)`, // Green to Grey
                    borderTop: 'none'
                },
                }}
            >
                <Box sx={{padding: '4px 12px', background: background, borderRadius: '8px', border: border, width: 'fit-content'}}>
                    <Typography sx={{color: color, fontWeight: '600', fontSize: '14px'}}>{title}</Typography>
                </Box>
            </Divider>  
        </Stack>
    )
};

export default TitleDivider;