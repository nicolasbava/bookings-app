import { InputAdornment, TextField } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
    return (
        <TextField 
            id="outlined-basic" 
            placeholder="Search" 
            variant="outlined" 
            size={'small'} 
            sx={{
                '.MuiOutlinedInput-root': {
                    paddingLeft: '6px',
                    fontSize: '14px',
                    borderRadius: '12px',
                    paddingBlock: '2px',
                    minHeight: '48px',
                    border: '1px solid #E4ECF2',
                    background: 'white'
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                }
            }}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start" sx={{background: '#f9fbff', padding: '4px', borderRadius: '4px', border: '1px solid #E4ECF2', maxHeight: '4em'}}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={'18px'} />
                        </InputAdornment>
                    )
                }
            }}
        />
    )
};

export default SearchInput;