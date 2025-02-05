import { Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import React from "react";

interface FilterBoxProps {
    open: boolean
}

const FilterBox = ({open} : FilterBoxProps) => {
    return (
        <Stack spacing={1} sx={{ display: open ? 'block' : 'none', maxWidth: '250px', border: '2px solid grey', borderRadius: '8px', padding: 2, boxShadow: '2px 2px 4px black'}}>
            <Typography>RPF Status</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Active" />
                <FormControlLabel control={<Checkbox />} label="Closed" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Canceled" />
            </FormGroup>
            <Button variant={'contained'} >Save</Button>
        </Stack>
    )
};

export default FilterBox;