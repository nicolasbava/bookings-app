/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";

interface FilterButtonProps {
    open: boolean,
    setOpen: (open : boolean) => void,
}

const FilterButton = ({open, setOpen} : FilterButtonProps) => {
    return (
        <>
            <Button 
                variant={'outlined'} 
                onClick={() => setOpen(!open)}
                sx={{
                    background: 'white', 
                    color: 'black', 
                    fontSize: '14px', 
                    fontWeight: 500,
                    textTransform: 'capitalize', 
                    border: `1px solid ${open ? '#4323FF' : '#E4ECF2'}`, 
                    borderRadius: '8px', 
                    padding: '11px 18px',
                    paddingRight: '22px',
                }}
                endIcon={
                    <img style={{maxWidth: '16px'}} src="/tunes-icon.png" alt="Filter Icon" />
                }>
                    Filters
            </Button>
        </>
    )
};

export default FilterButton;