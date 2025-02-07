import { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";

const RoomingListAutocomplete = ({ extractedDataState }) => {
    const [searchValue, setSearchValue] = useState("");

    // Transform data into a searchable format
    const options = extractedDataState?.map((item, index) => ({
        id: `${item.rfpName}-${item.agreement_type}-${index}`,
        label: `${item.rfpName} (${item.agreement_type})`, // Display both fields
        value: item.rfpName, // Use `rfpName` as the main identifier
        agreement_type: item.agreement_type
    })) ?? [];

    return (
        <Autocomplete
            disablePortal
            options={options.filter(option =>
                option.value.toLowerCase().includes(searchValue.toLowerCase()) ||
                option.agreement_type.toLowerCase().includes(searchValue.toLowerCase())
            )}
            getOptionLabel={(option) => option.label}
            sx={{ 
                '.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall':{
                    padding: '4px'
                },
                width: 300 }}
            size={'small'}
            key={(option) => option.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
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
                        },
                        '.MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
                            paddingTop: '4px', 
                            paddingBottom: '4px', 
                            paddingLeft: '6px', 
                        },
                    }}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start" sx={{
                                background: '#f9fbff',
                                padding: '9px',
                                borderRadius: '8px',
                                border: '1px solid #E4ECF2',
                                maxHeight: '4em'
                            }}>
                                <img src="/search-icon.png" alt="Search Icon" />
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
};

export default RoomingListAutocomplete;
