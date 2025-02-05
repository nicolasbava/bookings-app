import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
    return (
        <TextField 
            id="outlined-basic" 
            placeholder="Search" 
            variant="outlined" 
            size={'small'} 
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start" sx={{background: 'red', padding: '2px', borderRadius: '4px'}}>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }
            }}
        />
    )
};

export default SearchInput;