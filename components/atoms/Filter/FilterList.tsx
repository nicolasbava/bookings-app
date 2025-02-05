import theme from "@/app/theme";
import { Button, FormGroup, Stack, Typography } from "@mui/material";
import React from "react";
import CheckboxStyled from "./CheckboxStyled";

interface FilterListProps {
    open: boolean
}

const FilterList = ({ open }: FilterListProps) => {
    return (
        <Stack sx={{ position: 'absolute', zIndex: 99, minWidth: '184px', display: open ? 'block' : 'none', border: 'none', borderRadius: '8px', padding: 2, boxShadow: '0px 0px 8px #0000003d', maxWidth: '184px', background: 'white' }}>
            <Typography sx={{ color: theme.palette.grey[300], fontSize: '12px' }}>RPF STATUS</Typography>
            <FormGroup>
                <CheckboxStyled label='Active' />
                <CheckboxStyled label='Closed' />
                <CheckboxStyled label='Canceled' />
            </FormGroup>
            <Button variant={'contained'} sx={{marginTop: 1, width: '100%', textTransform: 'capitalize'}} >Save</Button>
        </Stack>
    )
};

export default FilterList;