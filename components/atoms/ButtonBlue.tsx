import { Button } from "@mui/material";

const ButtonBlue = ({children}: {children: string}) => {
    return (
        <Button fullWidth sx={{borderRadius: '8px', fontSize: '14px', fontWeight: '600', background: '#4323FF', color: 'white', textTransform: 'capitalize'}}>
           {children}
        </Button>
    )
};

export default ButtonBlue;