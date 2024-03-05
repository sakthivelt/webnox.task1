import { Button, FormControl } from '@mui/material'
import React from 'react'

function CustomButton({name,clickHandler}) {
  return (
    <FormControl fullWidth >
        <Button className='bg-black ' variant="contained" onClick={clickHandler}>{name}</Button>
     </FormControl>
  )
}

export default CustomButton