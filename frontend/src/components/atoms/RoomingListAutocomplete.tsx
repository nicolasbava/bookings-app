import { useState, useEffect } from "react";
import { Autocomplete, TextField, InputAdornment, AutocompleteProps } from "@mui/material";
import { RoomingListItem } from "../../interfaces/roomingList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RoomingListAutocompleteProps extends Partial<AutocompleteProps<any, any, any, any>> {
    extractedDataState: RoomingListItem[];
}

const RoomingListAutocomplete = ({ extractedDataState }: RoomingListAutocompleteProps) => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

    // Debounce logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 1500); // debounce exagerated to 1500ms, usually with 300ms is ok

        return () => clearTimeout(timeout);
    }, [searchValue]);

    const options = extractedDataState?.map((item, index) => ({
        id: `${item.rfpName}-${item.agreement_type}-${index}`,
        key: `${item.eventName}, ${item.rfpName}-${item.agreement_type}`,
        label: `${index}) ${item.eventName},  ${item.rfpName} (${item.agreement_type})`,
        value: item.rfpName,
        eventName: item.eventName,
        agreement_type: item.agreement_type
    })) ?? [];

    const filteredOptions = options.filter(option =>
        option.value.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
        option.agreement_type.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
        option.eventName.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );

    return (
        <Autocomplete
            disablePortal
            options={filteredOptions}
            getOptionLabel={(option) => option.label}
            sx={{
                '.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
                    padding: '4px'
                },
                width: { xs: '100%', md: 400 }
            }}
            size="small"
            isOptionEqualToValue={(option, value) => option.id === value.id}
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
