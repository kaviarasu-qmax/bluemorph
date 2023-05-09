import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';

export default function TimeAndDate() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2022-04-17T12:45:32')
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Time and Date</h1>
      <p>
        Enter the time and date to proceed <br /> setting up the device
      </p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField
          label='Enter Time'
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format='HH:mm:ss'
        />
        <DatePicker label='Basic date picker' />
      </LocalizationProvider>
      <Button variant='contained' href='#contained-buttons'>
        Next
      </Button>
    </div>
  );
}
