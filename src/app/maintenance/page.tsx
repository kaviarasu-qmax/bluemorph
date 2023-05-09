'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../styles/maintenance.css';

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

export default function Maintenance() {
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
        height: 300,
      }}
      style={{ width: '100vw' }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label='Upload system Configuration' {...a11yProps(0)} />
        <Tab label='Download system Configuration' {...a11yProps(1)} />
        <Tab label='Software Update' {...a11yProps(2)} />
        <Tab label='Irradiance Table Update' {...a11yProps(3)} />
        <Tab label='Threshold Update' {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Upload system Configuration
      </TabPanel>
      <TabPanel value={value} index={1}>
        Download system Configuration
      </TabPanel>
      <TabPanel value={value} index={2}>
        Software Update
      </TabPanel>
      <TabPanel value={value} index={3}>
        Irradiance Table Update
      </TabPanel>
      <TabPanel value={value} index={4}>
        Threshold Update
      </TabPanel>
    </Box>
  );
}
