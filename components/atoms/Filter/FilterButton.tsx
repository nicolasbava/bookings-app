import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

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
                    padding: '11px',
                    paddingRight: '15px',
                }}
                endIcon={
                    <FontAwesomeIcon 
                        icon={faSliders} 
                        size="xs" 
                        color="#00C2A6" 
                    />
                }>
                    Filters
            </Button>
        </>
    )
};

export default FilterButton;