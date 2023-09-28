import { IconButton, InputBase, Paper } from '@mui/material';
import React, { FC } from 'react';
interface FormInputProps {
  placeholder: string;
  icon: React.ReactNode;
}

const FormInput: FC<FormInputProps> = props => {
  return (
    <Paper
      component="form"
      sx={{
        width: '100%',
        height: '40px',
        paddingLeft: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '0.8rem', fontWeight: 600 }}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': props.placeholder }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        {props.icon}
      </IconButton>
    </Paper>
  );
};

export default FormInput;
