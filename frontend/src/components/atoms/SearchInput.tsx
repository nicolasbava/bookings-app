/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { RoomingListFetch, RoomingListItem } from "@/interfaces/roomingList";
import { useEffect, useState } from "react";
import RoomingListAutocomplete from "./RoomingListAutocomplete";

interface SearchInputProps {
    roomingLists?: RoomingListFetch[]
}

const SearchInput = ({roomingLists} : SearchInputProps) => {
    const [extractedDataState,setExtractedDataState] = useState<RoomingListItem[]>([])

    useEffect(() => {
        if (Array.isArray(roomingLists)) {
            const extractedData = roomingLists?.flatMap(event => event.data || [])
            setExtractedDataState(extractedData)
        } 
    }, [roomingLists?.length]);

    
    return (
        <>
            <RoomingListAutocomplete extractedDataState={extractedDataState} />
        </>
    )
};

export default SearchInput;