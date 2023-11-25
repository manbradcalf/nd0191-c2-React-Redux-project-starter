import { Button, Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPage } from '../actions/navbarActions';
import Login from './Login';
export const AuthedComponent = ({
  authedUser,
  dispatch,
  component,
  componentName,
}) => {
  if (!authedUser) {
    // todo: how to highlight Home in navbar when Link is clicked
    return (
      <Paper sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ p: 2, m: 2, textAlign: 'center' }}>
          Please login to view {componentName}
        </Typography>
        <Login />
      </Paper>
    );
  } else {
    return <Box sx={{ p: 2 }}>{component}</Box>;
  }
};

const mapStateToProps = ({ authedUser, dispatch }) => ({ dispatch });

connect(mapStateToProps(AuthedComponent));
