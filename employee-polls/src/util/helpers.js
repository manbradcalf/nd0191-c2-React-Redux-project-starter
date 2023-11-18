import Login from "../components/Login";
import { Box, Paper, Typography } from "@mui/material";

export const authedComponent = (authedUser, component, componentName) => {
  if (!authedUser) {
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ p: 2, m: 2, textAlign:"center" }}>
          Please login to view {componentName}
        </Typography>
        <Login />
      </Paper>
    );
  } else {
    return <Box sx={{ p: 2 }}>{component}</Box>;
  }
};
