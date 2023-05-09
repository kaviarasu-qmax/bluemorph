'use client';

import axios from 'axios';
import { fetchToken } from '../../components/Auth';

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import '../../styles/home.css';
import { Typography } from '@mui/material';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';

export default function Home() {
  // const [resp, setResp] = useState('');

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2022-04-17T12:45:32')
  );

  // Run once when page loads
  useEffect(() => {
    async function getdetails() {
      try {
        const config = {
          headers: { Authorization: `Bearer ${fetchToken()}` },
        };
        const res = await axios.get(
          `http://${window.location.hostname}${':8000'}/device/home`,
          config
        );
        console.log(res.data);
        // setResp(res.data);
      } catch (err) {
        console.log(err, 'error');
      }
    }
    getdetails();
  }, []);

  return (
    <Box sx={{ width: 900, height: 600 }} className='parent-box'>
      <Typography variant='h3' component='h2' className='sibiling-box'>
        Unit ID: BM00001
      </Typography>
      <Image
        src='/AprilbluemorphUV.143.png'
        alt='BlueMorph'
        className='blueMImg'
        width={800}
        height={300}
      />
      <Box className='container'>
        <h1>Lamp 1</h1>
        <h1>Lamp 2</h1>
        <h1>Lamp 3</h1>
      </Box>
      <Box className='container'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeField
            label='Format with seconds'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            format='HH:mm:ss'
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeField
            label='Format with seconds'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            format='HH:mm:ss'
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeField
            label='Format with seconds'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            format='HH:mm:ss'
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
