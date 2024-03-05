import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl } from '@mui/material';
import dayjs from 'dayjs';

export default function CustomDatePicker({name,value,setValue}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <FormControl fullWidth>

      <DemoContainer components={['DatePicker']}>
        <DatePicker format='DD-MM-YYYY' label={name} onChange={(e)=>{
            console.log(e.$d)
            setValue(e.$d)
        }}
        defaultValue={dayjs(new Date())}
        className='w-full'
        />

      </DemoContainer>
    </FormControl>

    </LocalizationProvider>
  );
}
