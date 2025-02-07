/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { RoomingListFetch, RoomingListItem } from "@/interfaces/roomingList";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface SearchInputProps {
    roomingLists?: RoomingListFetch[]
}

const SearchInput = ({roomingLists} : SearchInputProps) => {
    const [extractedDataState,setExtractedDataState] = useState<RoomingListItem[]>([])

    useEffect(() => {
        console.log('roomingLists', roomingLists)

        if (Array.isArray(roomingLists)) {
            const extractedData = roomingLists?.flatMap(event => event.data || [])
            console.log('extracteddata', extractedData)
            setExtractedDataState(extractedData)
        } 
    }, [roomingLists?.length])
    return (
        <>
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
        
        {/* <Autocomplete
            disablePortal
            options={extractedDataState ?? []}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        /> */}
        </>
    )
};

export default SearchInput;