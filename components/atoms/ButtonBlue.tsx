import { Button } from "@mui/material";

interface ButtonBlueProps {
    children: string | number
}

const ButtonBlue = ({children}: ButtonBlueProps) => {
    return (
        <Button fullWidth sx={{borderRadius: '8px', fontSize: '14px', fontWeight: '600', background: '#4323FF', color: 'white', textTransform: 'capitalize'}}>
           {children}
        </Button>
    )
};

export default ButtonBlue;