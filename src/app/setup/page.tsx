'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/setup.css';
import SetupWifi from '@/components/Setup-WiFi';
import SetupTimeDate from '@/components/Setup-TimeDate';
import SetupFixtureAlign from '@/components/Setup-FixtureAlign';
import SetupOperation from '@/components/Setup-Operation';
import SetupUnitSetup from '@/components/Setup-UnitSetup';
import Reset from '@/components/Setup-Rest';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Setup() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
      style={{ width: '100vw', height: '80vh' }}
    >
      <Tabs
        orientation='vertical'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          backgroundColor: 'transparent',
        }}
        className='tabs'
      >
        <Tab label='Change Admin Credentials' {...a11yProps(0)} />
        <Tab label='Wifi' {...a11yProps(1)} />
        <Tab label='Operation Setup' {...a11yProps(2)} />
        <Tab label='Unit Setup' {...a11yProps(3)} />
        <Tab label='Time and Date' {...a11yProps(4)} />
        <Tab label='Fixture Align' {...a11yProps(5)} />
        <Tab label='Reset' {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            required
            id='outlined-required'
            label='Enter Admin ID'
            defaultValue='BM00002'
          />
          <TextField
            required
            id='outlined-required'
            label='Enter Old Password'
          />
          <TextField
            required
            id='outlined-required'
            label='Enter New Password'
          />
          <TextField
            required
            id='outlined-required'
            label='Confirm new password'
          />
          <Button variant='contained' href='#contained-buttons'>
            Next
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SetupWifi />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SetupOperation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SetupUnitSetup />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SetupTimeDate />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SetupFixtureAlign />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Reset />
      </TabPanel>
    </Box>
  );
}
