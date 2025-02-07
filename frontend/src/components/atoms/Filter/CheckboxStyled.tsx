import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

interface CheckboxStyledProps extends CheckboxProps {
    label: string;
  }

const CheckboxStyled = ({label, ...props}: CheckboxStyledProps) => {
    return (
        <FormControlLabel
            
            sx={{
                '.MuiFormControlLabel-label': {
                    fontSize: '14px',
                    fontWeight: '600',
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