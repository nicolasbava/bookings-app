import theme from "@/app/theme";
import { FormGroup, Stack, Typography } from "@mui/material";
import React from "react";
import CheckboxStyled from "./CheckboxStyled";
import ButtonBlue from "../ButtonBlue";

interface FilterListProps {
    open: boolean
}

const FilterList = ({ open }: FilterListProps) => {
    return (
        <Stack sx={{ position: 'absolute', zIndex: 99, minWidth: '184px', display: open ? 'block' : 'none', border: 'none', borderRadius: '8px', padding: 2, boxShadow: '0px 0px 8px #0000003d', maxWidth: '184px', background: 'white' }}>
            <Typography sx={{ color: theme.palette.grey[300], fontSize: '12px' }}>RFP STATUS</Typography>
            <FormGroup sx={{marginBottom: '8px'}}>
                <CheckboxStyled label='Active' />
                <CheckboxStyled label='Closed' />
                <CheckboxStyled label='Canceled' />
            </FormGroup>
            <ButtonBlue >Save</ButtonBlue>
        </Stack>
    )
};

export default FilterList;