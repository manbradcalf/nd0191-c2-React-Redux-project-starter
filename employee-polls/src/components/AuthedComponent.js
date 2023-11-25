import { Button, Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPage } from '../actions/navbarActions';
export const AuthedComponent = ({
  authedUser,
  dispatch,
  component,
  componentName,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setSelectedPage('Home'));
    navigate('/');
  };
  if (!authedUser) {
    // todo: how to highlight Home in navbar when Link is clicked
    return (
      <Paper sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ p: 2, m: 2, textAlign: 'center' }}>
          Please login to view {componentName}
        </Typography>
        <Button onClick={handleClick}>
          <Typography variant="h4">Log In</Typography>
        </Button>
      </Paper>
    );
  } else {
    return <Box sx={{ p: 2 }}>{component}</Box>;
  }
};

const mapStateToProps = ({ authedUser, dispatch }) => ({ dispatch });

connect(mapStateToProps(AuthedComponent));
