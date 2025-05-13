import theme from "../../../app/theme";
import { FormGroup, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CheckboxStyled from "./CheckboxStyled";
import ButtonBlue from "../ButtonBlue";
import { useGlobalContext } from "../../../context/GlobalContext";

interface FilterListProps {
    open: boolean,
    setOpen: (ele: boolean) => void
}

const FilterList = ({ open, setOpen }: FilterListProps) => {
    const { selectedFilters, setFilters } = useGlobalContext();
    const [tempFilters, setTempFilters] = useState<string[]>([]);

    // Sync temporary filters with global state when the component opens
    useEffect(() => {
        if (open) {
            setTempFilters(selectedFilters);
        }
    }, [open, selectedFilters]);

    const handleCheckboxChange = (status: string) => {
        setTempFilters(prevFilters =>
            prevFilters.includes(status)
                ? prevFilters.filter(f => f !== status) // Remove if already selected
                : [...prevFilters, status] // Add if not selected
        );
    };

    const handleSave = () => {
        setFilters(tempFilters); // Apply the temporary selections
        setOpen(false);
    };

    return (
        <Stack
            sx={{
                position: 'absolute',
                marginTop: '10px',
                zIndex: 99,
                minWidth: '184px',
                display: open ? 'block' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: 2,
                boxShadow: '0px 0px 4px #0000003d',
                maxWidth: '184px',
                background: 'white'
            }}
        >
            <Typography sx={{ color: theme.palette.grey[300], fontSize: '12px' }}>RFP STATUS</Typography>
            <FormGroup sx={{ marginBottom: '8px' }}>
                {["Active", "Closed", "Canceled"].map(status => (
                    <CheckboxStyled
                        key={status}
                        label={status}
                        checked={tempFilters.includes(status)}
                        onChange={() => handleCheckboxChange(status)}
                    />
                ))}
            </FormGroup>
            <ButtonBlue onClick={handleSave}>Save</ButtonBlue>
        </Stack>
    );
};

export default FilterList;
