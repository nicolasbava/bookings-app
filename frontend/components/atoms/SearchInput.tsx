/* eslint-disable @next/next/no-img-element */
import { InputAdornment, TextField } from "@mui/material";

const SearchInput = () => {
    return (
        <TextField 
            id="outlined-basic" 
            placeholder="Search" 
            variant="outlined" 
            size={'small'} 
            sx={{
                '.MuiOutlinedInput-root': {
                    paddingLeft: '4px',
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
                        <InputAdornment position="start" sx={{background: '#f9fbff', padding: '9px', borderRadius: '8px', border: '1px solid #E4ECF2', maxHeight: '4em'}}>
                            <img src="/search-icon.png" alt="open doc icon" />
                        </InputAdornment>
                    )
                }
            }}
        />
    )
};

export default SearchInput;