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
                sx={{background: 'white', color: 'black', fontSize: '14px', textTransform: 'capitalize', border: `1px solid ${open ? 'blue' : '#E4ECF2'}`, borderRadius: '8px'}}
                endIcon={
                    <FontAwesomeIcon 
                        icon={faSliders} 
                        size="2x" 
                        color="#00C2A6" 
                    />
                }>
                    Filters
            </Button>
        </>
    )
};

export default FilterButton;