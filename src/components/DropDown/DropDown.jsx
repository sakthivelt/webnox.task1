import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({name,options,value,setValue}) {

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          defaultValue={"m"}
          onChange={handleChange}
        >
            {
                options?.map((item,index)=>{
                   return  <MenuItem value={item.value} key={item.name+index}>{item.name}</MenuItem>

                })
            }
        </Select>
      </FormControl>
    </Box>
  );
}