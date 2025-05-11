/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";

interface FilterButtonProps {
    text: string,
    value: boolean,
    onClick: (open : boolean) => void,
    endIconImg: string,
    borderStyle?: boolean
}

const StyledButton = ({text, value, onClick, endIconImg, borderStyle = false, ...rest} : FilterButtonProps) => {
    return (
        <>
            <Button 
                variant={'outlined'} 
                onClick={() => onClick(!value)}
                sx={{
                    background: 'white', 
                    color: 'black', 
                    fontSize: '14px', 
                    fontWeight: 500,
                    textTransform: 'capitalize', 
                    border: borderStyle ? `1px solid ${value ? '#4323FF' : '#E4ECF2'}` : '1px solid #E4ECF2', 
                    borderRadius: '8px', 
                    padding: '11px 18px',
                    paddingRight: '22px',
                }}
                {...rest}
                endIcon={
                    <img style={{maxWidth: '16px'}} src={endIconImg} alt="Filter Icon" />
                }>
                    {text}
            </Button>
        </>
    )
};

export default StyledButton;