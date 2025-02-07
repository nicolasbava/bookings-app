import theme from "@/app/theme";
import { FormGroup, Stack, Typography } from "@mui/material";
import React from "react";
import CheckboxStyled from "./CheckboxStyled";
import ButtonBlue from "../ButtonBlue";
import { useGlobalContext } from "@/context/GlobalContext";

interface FilterListProps {
    open: boolean,
    setOpen: (ele: boolean) => void
}

const FilterList = ({ open, setOpen }: FilterListProps) => {
    const { selectedFilters, toggleFilter } = useGlobalContext();
    

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
                        checked={selectedFilters.includes(status)}
                        onChange={() => toggleFilter(status)}
                    />
                ))}
            </FormGroup>
            <ButtonBlue onClick={() => setOpen(false)}>Save</ButtonBlue>
        </Stack>
    )
};

export default FilterList;