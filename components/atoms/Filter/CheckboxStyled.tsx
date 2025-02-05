import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

interface CheckboxStyledProps extends CheckboxProps {
    label: string; // Add the label prop to the interface
  }

const CheckboxStyled = ({label, ...props}: CheckboxStyledProps) => {
    return (
        <FormControlLabel
            
            sx={{
                '.MuiFormControlLabel-label': {
                    fontSize: '14px', // Customize label font size
                    fontWeight: '600    ', // Customize label font weight
                },
            }}
            control={<Checkbox  sx={{
                color: 'grey',
                '&.Mui-checked': {
                  color: '#00C2A6',
                },
              }} color={'secondary'} size={'small'} {...props} />} label={label} />
    )
};

export default CheckboxStyled;