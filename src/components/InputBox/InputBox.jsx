import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

function InputBox({value, setValue,name}) {
  return (
    <FormControl fullWidth><TextField id="outlined-basic" label={name} variant="outlined" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    </FormControl>
  )
}

export default InputBox