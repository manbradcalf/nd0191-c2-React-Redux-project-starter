import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import {
  Paper,
  Button,
  Container,
  Box,
  Typography,
  Avatar,
} from '@mui/material';

const NavBar = ({ dispatch, authedUser, avatarURL }) => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleAuth = (event) => {
    event.preventDefault();
    if (authedUser) {
      dispatch(setAuthedUser(null));
    } else {
      setSelectedPage('Home');
    }
  };

  const handleSetSelectedPage = (event) => {
    const pageName = event.target.textContent;
    setSelectedPage(pageName);
  };

  return (
    <Paper sx={{ m: 2, p: 2, width: 'false' }}>
      <Link to="/">
        <Typography
          onClick={handleSetSelectedPage}
          sx={{
            display: 'inline-flex',
            p: 2,
            color: selectedPage === 'Home' ? 'grey' : '#1976d2',
          }}
          variant="h6"
          fontStyle={'underline'}
        >
          Home
        </Typography>
      </Link>
      <Link to="/leaderboard">
        <Typography
          onClick={handleSetSelectedPage}
          sx={{
            display: 'inline-flex',
            p: 2,
            color: selectedPage === 'Leaderboard' ? 'grey' : '#1976d2',
          }}
          variant="h6"
        >
          Leaderboard
        </Typography>
      </Link>
      <Link to="/add">
        <Typography
          onClick={handleSetSelectedPage}
          sx={{
            display: 'inline-flex',
            p: 2,
            color: selectedPage === 'Ask' ? 'grey' : '#1976d2',
          }}
          variant="h6"
        >
          Ask
        </Typography>
      </Link>

      <Container sx={{ float: 'right', width: 'auto', display: 'inline-flex' }}>
        {authedUser ? (
          <Box sx={{ display: 'inline-flex' }}>
            <Button>
              <Typography
                onClick={handleAuth}
                sx={{
                  p: 2,
                  color: '#1976d2',
                }}
                variant="h8"
              >
                Log Out
              </Typography>
            </Button>
            <Box sx={{ display: 'block' }}>
              <Avatar src={avatarURL} sx={{ margin: 'auto' }} />
              <Typography variant="caption" sx={{ display: 'block' }}>
                {authedUser}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Link to="/">
            <Typography
              onClick={handleAuth}
              sx={{
                display: 'inline-flex',
                p: 2,
                color: '#1976d2',
              }}
              variant="h8"
            >
              Log In
            </Typography>
          </Link>
        )}
      </Container>
    </Paper>
  );
};
const mapStateToProps = ({ authedUser, employees }) => ({
  authedUser: authedUser,
  avatarURL: employees[authedUser]?.avatarURL,
});

export default connect(mapStateToProps)(NavBar);
