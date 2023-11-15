import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Paper, Button, Container, Box, Typography } from "@mui/material";

const NavBar = ({ dispatch, authedUser }) => {
  // todo: cleanup
  const [selectedPage, setSelectedPage] = useState(null);

  const handleAuth = (event) => {
    event.preventDefault();
    if (authedUser) {
      dispatch(setAuthedUser(null));
    } else {
      console.log("You are logged out. Navigate to Log In component for auth");
    }
  };

  const handleSetSelectedPage = (event) => {
    const pageName = event.target.textContent;
    setSelectedPage(pageName);
  };

  return (
    <Paper sx={{ m: 2, p: 2, width: "false" }}>
      <Link to="/">
        <Typography
          onClick={handleSetSelectedPage}
          sx={{
            display: "inline-flex",
            p: 2,
            color: selectedPage === "Home" ? "grey" : "#1976d2",
          }}
          variant="h6"
          fontStyle={"underline"}
        >
          Home
        </Typography>
      </Link>
      <Link to="/leaderboard">
        <Typography
          onClick={handleSetSelectedPage}
          sx={{
            display: "inline-flex",
            p: 2,
            color: selectedPage === "Leaderboard" ? "grey" : "#1976d2",
            textEmphasisStyle:"sesame"
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
            display: "inline-flex",
            p: 2,
            color: selectedPage === "Ask" ? "grey" : "#1976d2",
          }}
          variant="h6"
        >
          Ask
        </Typography>
      </Link>

      <Container sx={{ float: "right", width: "auto", display: "block" }}>
        <Link to="/login" onClick={handleAuth}>
          <Typography
            onClick={handleAuth}
            sx={{
              display: "block",
              color: authedUser ? "red" : "#1976d2",
            }}
            variant="h6"
          >
            {authedUser ? "Log Out" : "Log In"}
          </Typography>
        </Link>
        {authedUser ? (
          <Typography variant="caption">Welcome {authedUser}</Typography>
        ) : (
          <Typography variant="caption">Get started.</Typography>
        )}
      </Container>
    </Paper>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
