import Login from '../components/Login';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const authedComponent = (authedUser, component, componentName) => {
  if (!authedUser) {
    return (
      <Paper sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ p: 2, m: 2, textAlign: 'center' }}>
          Please login to view {componentName}
        </Typography>
        <Link to="/">
          <Typography variant="h4">Log In</Typography>
        </Link>
      </Paper>
    );
  } else {
    return <Box sx={{ p: 2 }}>{component}</Box>;
  }
};
