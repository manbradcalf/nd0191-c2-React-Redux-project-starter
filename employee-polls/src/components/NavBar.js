import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Typography } from '@mui/material';

const NavBar = ({ dispatch, authedUser }) => {
  const handleAuth = (event) => {
    event.preventDefault();
    console.log('handleAuth', authedUser);
    if (authedUser) {
      dispatch(setAuthedUser(null));
    } else {
      console.log('You are logged out. Navigate to Log In component for auth');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <Typography variant="button">Home</Typography>
            </Link>
          </li>
          <li>
            <Link to="/leaderboard">
              <Typography variant="button">Leaderboard</Typography>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <Typography variant="button">Ask</Typography>
            </Link>
          </li>
          <li>
            <Link onClick={handleAuth}>
              <Typography variant="button">
                {authedUser ? 'Log Out' : 'Log In'}
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
