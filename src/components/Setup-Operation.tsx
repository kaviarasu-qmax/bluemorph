import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

export default function SetupOperation() {
  return (
    <>
      <h1>Opeartion Setup</h1>
      <p>
        Select the appropriate category to <br /> proceed setting up the device
      </p>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Mode Of operation
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Single'
            />
            <FormControlLabel value='male' control={<Radio />} label='Dual' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Occupancy
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Occupied'
            />
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='Unoccupied'
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button variant='contained' href='#contained-buttons'>
        Next
      </Button>
    </>
  );
}
