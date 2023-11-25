import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Container, Box, Typography, Avatar } from '@mui/material';
import { setAuthedUser } from '../actions/authedUserActions';
import { setSelectedPage } from '../actions/navbarActions';

const NavBar = ({ dispatch, authedUser, avatarURL, selectedPage }) => {
  const handleAuth = (event) => {
    event.preventDefault();
    if (authedUser) {
      dispatch(setAuthedUser(null));
    }
  };

  const handleSetSelectedPage = (event) => {
    dispatch(setSelectedPage(event.target.textContent));
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
            <Link to="/">
              <Typography
                onClick={handleAuth}
                sx={{
                  p: 2,
                  display: 'inline-flex',
                  color: '#1976d2',
                }}
                variant="h8"
              >
                Log Out
              </Typography>
            </Link>
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
const mapStateToProps = ({ authedUser, employees, navbar }) => ({
  authedUser: authedUser,
  avatarURL: employees[authedUser]?.avatarURL,
  selectedPage: navbar?.selectedPage,
});

export default connect(mapStateToProps)(NavBar);
