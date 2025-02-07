import { Button } from "@mui/material";

interface ButtonBlueProps {
    children: string | number,
    onClick?: () => void
}

const ButtonBlue = ({children, onClick}: ButtonBlueProps) => {
    return (
        <Button 
            onClick={onClick}
            fullWidth 
            sx={{
                borderRadius: '8px', 
                fontSize: '14px', 
                fontWeight: '600', 
                background: '#4323FF', 
                color: 'white', 
                textTransform: 'capitalize'
                }}
            >
           {children}
        </Button>
    )
};

export default ButtonBlue;