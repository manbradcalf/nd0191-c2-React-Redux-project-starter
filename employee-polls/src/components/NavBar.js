import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Typography } from '@mui/material';

const NavBar = ({ dispatch, authedUser }) => {
  // todo: cleanup
  const handleAuth = (event) => {
    event.preventDefault();
    if (authedUser) {
      dispatch(setAuthedUser(null));
    } else {
      console.log('You are logged out. Navigate to Log In component for auth');
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li key="home">
          <Link to="/">
            <Typography variant="button">Home</Typography>
          </Link>
        </li>
        <li key="leaderboard">
          <Link to="/leaderboard">
            <Typography variant="button">Leaderboard</Typography>
          </Link>
        </li>
        <li key="ask">
          <Link to="/add">
            <Typography variant="button">Ask</Typography>
          </Link>
        </li>
        <li key="auth">
          <Link onClick={handleAuth}>
            <Typography variant="button">
              {authedUser ? 'Log Out' : 'Log In'}
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
