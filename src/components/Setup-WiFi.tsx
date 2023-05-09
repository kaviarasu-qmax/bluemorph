/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const names = [
  'BM00001',
  'BM00002',
  'BM00003',
  'BM00004',
  'BM00005',
  'BM00006',
  'BM00007',
];

function SetupWifi() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <Typography variant='h1' component='h2'>
        WiFi
      </Typography>
      <p>
        Known API's will be joined automatically. Available <br />
        networks will also be displayed
      </p>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor='select-multiple-native'>
          Networks
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label='Native'
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
        <Button variant='contained' href='#contained-buttons'>
          Connect
        </Button>
      </FormControl>
    </div>
  );
}

export default SetupWifi;
