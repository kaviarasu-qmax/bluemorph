'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UnitSetup = () => {
  return (
    <>
      <h1>Unit Setup</h1>
      <p>
        Fill in the details to proceed <br /> setting up the device.
      </p>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField id='outlined-basic' label='Unit ID' variant='outlined' />
        <TextField
          id='outlined-basic'
          label='Wifi Password'
          variant='outlined'
        />
      </Box>
      <Button variant='contained' href='#contained-buttons'>
        Next
      </Button>
    </>
  );
};

export default UnitSetup;
