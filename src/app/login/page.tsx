'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setToken, fetchToken } from '../../components/Auth';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const login = () => {
    if (password === '') {
      return;
    } else {
      const formData = new FormData();
      formData.append('username', '1');
      formData.append('password', password);
      formData.append('grant_type', 'password');

      axios
        .post(`http://${window.location.hostname}${':8000'}/token`, formData)
        .then(function (response) {
          console.log(response.data.token, 'response.data.token');
          if (response.data.token) {
            setToken(response.data.token);
            router.push('/home');
          }
        })
        .catch(function (error) {
          console.log(error, 'error');
        });
    }
  };

  useEffect(() => {
    try {
      if (fetchToken()) router.push('/home');
    } catch (err) {
      console.log(err, 'error');
    }
  }, [router]);

  return (
    <>
      <TextField
        id='standard-basic'
        label='Input Password'
        variant='standard'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant='contained' onClick={login}>
        Login
      </Button>
    </>
  );
};

export default Login;
