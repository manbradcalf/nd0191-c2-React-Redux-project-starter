import Login from "../components/Login";
import { Paper } from "@mui/material";

export const authedComponent = (authedUser, component, componentName) => {
  if (!authedUser) {
    return (
      <div>
        <h1>Please login to view {componentName}</h1>
        <Login />
      </div>
    );
  } else {
    return <Paper sx={{ p: 2 }}>{component}</Paper>;
  }
};
