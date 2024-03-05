import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

function InputArea({value, setValue,name}) {
  return (
    <FormControl fullWidth>
    <TextField  rows={3} id="outlined-basic"  maxRows={4} multiline label={name} variant="outlined" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    </FormControl>
  )
}

export default InputArea