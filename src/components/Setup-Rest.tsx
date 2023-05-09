import React from 'react';
import Button from '@mui/material/Button';

export default function Reset() {
  return (
    <div>
      <h1>Reset</h1>
      <p>Slide the bar to reset the device</p>
      <Button variant='contained' href='#contained-buttons'>
        Reset
      </Button>
    </div>
  );
}
