// Once the user logs in, the home page is shown.
import React from 'react';
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
} from '@mui/material';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { setAuthedUser } from '../actions/authedUserActions';
import { Typography, Box, Button } from '@mui/material';
import { handleLogin } from '../actions/shared';

const Login = ({ dispatch, employees, authedUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    dispatch(handleLogin(username, password));
  };

  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Typography variant="h4">Login</Typography>
      <FormControl fullWidth>
        <TextField
          id="username-textfield"
          variant="outlined"
          label="Username"
          sx={{ marginTop: 1 }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="password-textfield"
          variant="outlined"
          label="Password"
          sx={{ marginTop: 1 }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleClick}>LogIn</Button>
    </Box>
  );
};

const mapStateToProps = ({ employees, authedUser }) => {
  return {
    employees: Object.values(employees),
    authedUser,
  };
};

export default connect(mapStateToProps)(Login);
