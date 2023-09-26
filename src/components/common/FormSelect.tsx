import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC } from 'react';

interface FormSelectProps {
  list: string[];
  icon: React.ReactNode;
  defaultValue?: string;
}

const FormSelect: FC<FormSelectProps> = props => {
  const [age, setAge] = React.useState(props.defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{
        width: '100%',
        height: '40px',
        background: '#fff',
        borderRadius: '5px',
      }}
    >
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={() => props.icon}
        sx={{
          fontSize: '0.8rem',
          paddingRight: '10px',
          height: '100%',
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: 0,
            },
        }}
      >
        {props.list.map((item, idx) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
