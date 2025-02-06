import { Typography } from "@mui/material";

interface TitleCardProps {
    children: string
}

const TitleCard = ({children} : TitleCardProps) => {
    return (
        <Typography sx={{fontSize: '16px', fontWeight: '700', color: '#141416'}}>
            {children}
        </Typography>
    )
};

export default TitleCard;