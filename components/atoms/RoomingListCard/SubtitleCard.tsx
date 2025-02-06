import { Typography } from "@mui/material";

interface SubtitleCardProps {
    children: string
}

const SubtitleCard = ({children} : SubtitleCardProps) => {
    return (
        <Typography mt={1} sx={{fontSize: '14px', fontWeight: '500', color: '#141416CC'}}>
            agreement_type: <strong>{children}</strong>
        </Typography>
    )
};

export default SubtitleCard;